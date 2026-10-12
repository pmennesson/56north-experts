#!/usr/bin/env bash
# IndexNow: tells Bing, Yandex, Seznam, Naver... which pages are new or changed.
# Launched in the background by auto-update.sh after a successful deployment.
# Never fails the deployment: every error is logged and the script exits 0.
#
# For each host it reads /sitemap.xml, compares every <loc>/<lastmod> pair with
# the list saved at the previous run (/var/lib/56north-indexnow/<host>.list) and
# submits only the URLs that are new or whose lastmod changed. First run: all.
# The saved list is only replaced once IndexNow has accepted the submission, so
# a failed run is retried at the next deployment.
#
# The key is public by design (the protocol checks https://<host>/<key>.txt):
# it is the 32-hex-character file in public/ (experts) and main-site/public/.
#
# Manual run:   sudo bash /opt/56north-experts/deploy/indexnow.sh >> /var/log/56north-deploy.log 2>&1
# Local test:   DRY_RUN=1 SITEMAP_EXPERTS=a.xml SITEMAP_MAIN=b.xml STATE_DIR=/tmp/s bash deploy/indexnow.sh
#   DRY_RUN=1          print the URLs instead of POSTing, skip the key check, never write state
#   SITEMAP_EXPERTS / SITEMAP_MAIN   read that host's sitemap from a local file
#   STATE_DIR, INITIAL_WAIT (s), INDEXNOW_KEY   overrides
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_DIR="${STATE_DIR:-/var/lib/56north-indexnow}"
ENDPOINT="https://api.indexnow.org/indexnow"
DRY_RUN="${DRY_RUN:-0}"
INITIAL_WAIT="${INITIAL_WAIT:-60}"
KEY_TRIES=10          # key check: up to 10 tries...
KEY_DELAY=15          # ...15 s apart (2.5 min after the initial wait)
MAX_URLS=10000        # IndexNow limit per request

log() { echo "$(date -Is) indexnow: $*"; }

# host  ->  environment variable holding a local sitemap file (tests)
HOSTS=("experts.56north.io" "56north.io")
local_sitemap() {
  case "$1" in
    experts.56north.io) echo "${SITEMAP_EXPERTS:-}" ;;
    56north.io)         echo "${SITEMAP_MAIN:-}" ;;
  esac
}

find_key() {
  if [ -n "${INDEXNOW_KEY:-}" ]; then echo "$INDEXNOW_KEY"; return; fi
  local f name
  for f in "$ROOT"/public/*.txt; do
    [ -f "$f" ] || continue
    name=$(basename "$f" .txt)
    if [[ "$name" =~ ^[0-9a-f]{32}$ ]]; then echo "$name"; return; fi
  done
}

# Waits until https://<host>/<key>.txt answers 200 with the key as its body.
key_served() {
  local host="$1" key="$2" i body
  for ((i = 1; i <= KEY_TRIES; i++)); do
    body=$(curl -fsS --max-time 10 "https://$host/$key.txt" 2>/dev/null | tr -d '[:space:]') || body=""
    [ "$body" = "$key" ] && return 0
    sleep "$KEY_DELAY"
  done
  return 1
}

# Sitemap XML on stdin -> "url<TAB>lastmod" lines (sorted, unique), this host only.
parse_sitemap() {
  local host="$1"
  tr -d '\r\n' \
    | sed 's#</url>#</url>\n#g' \
    | awk -v host="$host" '
        {
          loc = ""; lm = ""
          if (match($0, /<loc>[^<]*<\/loc>/)) loc = substr($0, RSTART + 5, RLENGTH - 11)
          if (match($0, /<lastmod>[^<]*<\/lastmod>/)) lm = substr($0, RSTART + 9, RLENGTH - 19)
          gsub(/^[ \t]+|[ \t]+$/, "", loc); gsub(/^[ \t]+|[ \t]+$/, "", lm)
          gsub(/&amp;/, "\\&", loc)
          p = "https://" host
          if (loc == p || index(loc, p "/") == 1) print loc "\t" lm
        }' \
    | LC_ALL=C sort -u
}

json_escape() { sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'; }

process_host() {
  local host="$1" key="$2" src xml cur old changed n body code payload
  src=$(local_sitemap "$host")
  if [ -n "$src" ]; then
    xml=$(cat "$src" 2>/dev/null) || { log "$host: cannot read $src"; return; }
  else
    xml=$(curl -fsS --max-time 30 "https://$host/sitemap.xml" 2>/dev/null) \
      || { log "$host: sitemap unreachable, skipped"; return; }
  fi

  cur=$(printf '%s' "$xml" | parse_sitemap "$host")
  if [ -z "$cur" ]; then log "$host: sitemap empty or unreadable, skipped"; return; fi

  old="$STATE_DIR/$host.list"
  # Lines present now but not last time = new URL, or same URL with a new lastmod.
  changed=$(LC_ALL=C comm -13 <(LC_ALL=C sort -u "$old" 2>/dev/null) <(printf '%s\n' "$cur") \
              | cut -f1 | LC_ALL=C sort -u | head -n "$MAX_URLS")
  if [ -z "$changed" ]; then log "$host: nothing new"; return; fi
  n=$(printf '%s\n' "$changed" | wc -l | tr -d ' ')

  if [ "$DRY_RUN" = "1" ]; then
    log "$host: DRY_RUN, $n URL(s) would be submitted:"
    printf '%s\n' "$changed" | sed 's/^/    /'
    return
  fi

  if ! key_served "$host" "$key"; then
    log "$host: https://$host/$key.txt does not serve the key, skipped (retry at next deploy)"
    return
  fi

  payload=$(printf '{"host":"%s","key":"%s","keyLocation":"https://%s/%s.txt","urlList":[%s]}' \
    "$host" "$key" "$host" "$key" \
    "$(printf '%s\n' "$changed" | json_escape | sed 's/.*/"&"/' | paste -sd, -)")

  body=$(mktemp) || return
  code=$(curl -sS --max-time 30 -o "$body" -w '%{http_code}' -X POST "$ENDPOINT" \
           -H 'Content-Type: application/json; charset=utf-8' --data-binary "$payload" 2>>"$body") || code="000"
  case "$code" in
    200|202)
      mkdir -p "$STATE_DIR" && printf '%s\n' "$cur" > "$old.tmp" && mv "$old.tmp" "$old"
      log "$host: $n URL(s) submitted (HTTP $code)" ;;
    *)
      log "$host: submission refused (HTTP $code): $(head -c 300 "$body" | tr '\n' ' ')" ;;
  esac
  rm -f "$body"
}

main() {
  local key host
  key=$(find_key)
  if [ -z "$key" ]; then log "no key file (public/<32 hex>.txt), nothing done"; return; fi
  if [ "$DRY_RUN" != "1" ] && [ "$INITIAL_WAIT" -gt 0 ] 2>/dev/null; then
    sleep "$INITIAL_WAIT"   # let the new containers start serving
  fi
  for host in "${HOSTS[@]}"; do
    process_host "$host" "$key" || log "$host: unexpected error"
  done
}

main || true
exit 0
