#!/usr/bin/env bash
# Automatic deployment: run every 5 minutes by the 56north-update systemd timer.
# If GitHub main has moved, pull it and rebuild. If the build fails, the running
# containers are left untouched (the site stays up on the previous version).
# Manual run:  sudo /opt/56north-experts/deploy/auto-update.sh --force
set -euo pipefail

DIR="/opt/56north-experts"
LOG="/var/log/56north-deploy.log"
COMPOSE="docker compose -f deploy/docker-compose.yml"

exec 9>/var/lock/56north-update.lock
flock -n 9 || exit 0   # a deployment is already running

cd "$DIR"

# The Caddyfile is bind-mounted as a single file: when git replaces it, the
# running container keeps the old copy. Recreate Caddy whenever they differ
# (checked on every run, a few seconds of interruption at most).
sync_caddy() {
  if ! $COMPOSE exec -T caddy cat /etc/caddy/Caddyfile 2>/dev/null | cmp -s - deploy/Caddyfile; then
    echo "$(date -Is) Caddyfile changed: recreating caddy" >> "$LOG"
    $COMPOSE up -d --force-recreate --no-deps caddy >> "$LOG" 2>&1 || true
  fi
}

# The export timer lives in /etc/systemd: a schedule change in git must be
# re-installed. Done whenever deploy/install-export-timer.sh's hash changes.
sync_export_timer() {
  local f="deploy/install-export-timer.sh" st="/var/lib/56north-vivier-timer.sha" h
  [ -f "$f" ] || return 0
  h=$(sha256sum "$f" | cut -d' ' -f1)
  if [ "$(cat "$st" 2>/dev/null)" != "$h" ]; then
    if bash "$f" >> "$LOG" 2>&1; then
      echo "$h" > "$st"
      echo "$(date -Is) export timer re-installed" >> "$LOG"
    fi
  fi
}

STATE="/var/lib/56north-deployed"        # SHA of the last successful build

git fetch -q origin main
REMOTE=$(git rev-parse origin/main)
# Compare with what was last BUILT, not with the checkout: a manual `git pull`
# must not make the timer believe the site is already up to date.
DEPLOYED=$(cat "$STATE" 2>/dev/null || echo none)
if [ "$DEPLOYED" = "$REMOTE" ] && [ "${1:-}" != "--force" ]; then
  sync_caddy
  exit 0
fi

echo "$(date -Is) deploying ${REMOTE:0:7}" >> "$LOG"
git reset -q --hard origin/main          # untracked files such as .env.production are kept
export GIT_SHA="${REMOTE:0:7}"
if $COMPOSE up -d --build --remove-orphans >> "$LOG" 2>&1; then
  sync_caddy
  docker image prune -f >/dev/null 2>&1 || true
  docker builder prune -f --filter until=72h >/dev/null 2>&1 || true
  echo "$REMOTE" > "$STATE"
  echo "$(date -Is) deployed ${REMOTE:0:7}" >> "$LOG"
  sync_export_timer
else
  echo "$(date -Is) FAILED ${REMOTE:0:7} (previous version still running)" >> "$LOG"
  exit 1
fi
