#!/usr/bin/env bash
# Export du vivier experts IA : Excel par e-mail (+ Dropbox si configuré).
#
# Appelle la route protégée du site experts avec le jeton EXPORT_TOKEN lu dans
# ../.env.production. Sans --force, n'envoie rien si la table n'a pas changé
# depuis le dernier export (empreinte mémorisée dans STATE).
#
# Usage :  deploy/export-vivier.sh [--force]
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$DIR/.env.production"
STATE="/var/lib/56north-vivier-fingerprint"
URL="${EXPORT_URL:-https://experts.56north.io/api/admin/export-vivier}"

[ -f "$ENV_FILE" ] || { echo "export-vivier: $ENV_FILE introuvable" >&2; exit 1; }
TOKEN="$(grep -E '^EXPORT_TOKEN=' "$ENV_FILE" | cut -d= -f2- | tr -d '"'"'" | tr -d '\r')"
[ -n "$TOKEN" ] || { echo "export-vivier: EXPORT_TOKEN absent de .env.production" >&2; exit 1; }

# 1) Coordonnées publiques : on examine jusqu'à 40 sites pas encore lus (long : ~2 min).
ENRICH_URL="${ENRICH_URL:-https://experts.56north.io/api/admin/enrich-vivier}"
ENRICH="$(curl -sS -X POST -H "x-export-token: $TOKEN" --max-time 290 "$ENRICH_URL?limit=40" || true)"
echo "enrich-vivier: ${ENRICH:0:300}"

# 2) Export si la base a changé.
QUERY=""
if [ "${1:-}" != "--force" ] && [ -f "$STATE" ]; then
  QUERY="?ifChanged=$(cat "$STATE")"
fi

HEADERS="$(mktemp)"; BODY="$(mktemp)"
trap 'rm -f "$HEADERS" "$BODY"' EXIT

CODE="$(curl -sS -o "$BODY" -D "$HEADERS" -w '%{http_code}' -X POST \
  -H "x-export-token: $TOKEN" --max-time 120 "$URL$QUERY")"

FP="$(grep -i '^x-vivier-fingerprint:' "$HEADERS" | awk '{print $2}' | tr -d '\r')"
[ -n "$FP" ] && echo "$FP" > "$STATE"

case "$CODE" in
  200) echo "export-vivier: envoyé — $(cat "$BODY")" ;;
  204) echo "export-vivier: base inchangée, rien envoyé" ;;
  *)   echo "export-vivier: échec HTTP $CODE — $(cat "$BODY")" >&2; exit 1 ;;
esac
