#!/usr/bin/env bash
# Export du vivier experts IA : Excel par e-mail (+ Dropbox si configuré).
#
# Appelle la route protégée du site experts avec le jeton EXPORT_TOKEN lu dans
# ../.env.production. Sans --force, n'envoie rien tant qu'aucun NOUVEAU candidat
# n'a été ajouté depuis le dernier envoi ; les nouveaux arrivent dans un onglet
# à part. Avec --force : envoi complet, sans séparation.
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

# 2) Export seulement s'il y a de NOUVEAUX candidats depuis le dernier envoi.
#    SINCE = heure du dernier contrôle réussi (renvoyée par la route).
#    Première fois : on part de la date du dernier passage de l'ancien script.
SINCE_FILE="/var/lib/56north-vivier-since"
if [ -s "$SINCE_FILE" ]; then
  SINCE="$(cat "$SINCE_FILE")"
elif [ -f "$STATE" ]; then
  SINCE="$(date -u -r "$STATE" +%Y-%m-%dT%H:%M:%SZ)"
else
  SINCE="$(date -u -d '-1 day' +%Y-%m-%dT%H:%M:%SZ)"
fi
QUERY="?since=$SINCE"
[ "${1:-}" = "--force" ] && QUERY=""

HEADERS="$(mktemp)"; BODY="$(mktemp)"
trap 'rm -f "$HEADERS" "$BODY"' EXIT

CODE="$(curl -sS -o "$BODY" -D "$HEADERS" -w '%{http_code}' -X POST \
  -H "x-export-token: $TOKEN" --max-time 120 "$URL$QUERY")"

NOW="$(grep -i '^x-vivier-now:' "$HEADERS" | awk '{print $2}' | tr -d '\r')"

case "$CODE" in
  200) [ -n "$NOW" ] && echo "$NOW" > "$SINCE_FILE"; echo "export-vivier: envoyé — $(cat "$BODY")" ;;
  204) echo "export-vivier: aucun nouveau candidat depuis $SINCE, rien envoyé" ;;
  *)   echo "export-vivier: échec HTTP $CODE — $(cat "$BODY")" >&2; exit 1 ;;
esac
