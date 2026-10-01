#!/usr/bin/env bash
# 56North Experts — one-command install / update on a fresh Ubuntu VPS.
# Usage (on the VPS):
#   curl -fsSL https://raw.githubusercontent.com/pmennesson/56north-experts/main/deploy/install.sh | sudo bash
# Re-run the same command later to update the site.
set -euo pipefail

REPO="https://github.com/pmennesson/56north-experts.git"
DIR="/opt/56north-experts"
SUPABASE_URL="https://yjbtezaoezefcqiryymr.supabase.co"

say() { printf '\n\033[1;34m==> %s\033[0m\n' "$1"; }

if [ "$(id -u)" -ne 0 ]; then
  echo "Lance la commande avec sudo." >&2
  exit 1
fi

say "1/4 Docker"
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
else
  echo "Docker déjà installé."
fi

say "2/4 Code du site"
apt-get install -y -qq git >/dev/null
if [ -d "$DIR/.git" ]; then
  git -C "$DIR" pull --ff-only
else
  git clone "$REPO" "$DIR"
fi
cd "$DIR"

say "3/4 Clé Supabase"
if [ ! -f .env.production ]; then
  echo "Colle la clé secrète Supabase (elle ne s'affiche pas à l'écran), puis appuie sur Entrée :"
  read -rs KEY </dev/tty
  echo
  if [ -z "$KEY" ]; then
    echo "Aucune clé saisie, arrêt." >&2
    exit 1
  fi
  umask 077
  printf 'SUPABASE_URL=%s\nSUPABASE_SECRET_KEY=%s\n' "$SUPABASE_URL" "$KEY" > .env.production
  echo "Clé enregistrée sur le serveur uniquement."
else
  echo "Clé déjà présente, conservée."
fi

say "Alertes email (Resend)"
if ! grep -q '^RESEND_API_KEY=' .env.production; then
  echo "Colle la clé API Resend (invisible à l'écran), ou appuie juste sur Entrée pour passer :"
  read -rs RKEY </dev/tty
  echo
  if [ -n "$RKEY" ]; then
    echo "Adresse email qui recevra les alertes (celle de ton compte Resend) :"
    read -r NMAIL </dev/tty
    umask 077
    printf 'RESEND_API_KEY=%s\nNOTIFY_EMAIL=%s\n' "$RKEY" "$NMAIL" >> .env.production
    echo "Alertes activées vers $NMAIL."
  else
    echo "Alertes ignorées pour l'instant."
  fi
else
  echo "Alertes déjà configurées."
fi

say "4/4 Démarrage (3 à 5 minutes la première fois)"
export GIT_SHA="$(git rev-parse --short HEAD)"
docker compose -f deploy/docker-compose.yml up -d --build --remove-orphans
# Pick up Caddyfile changes (bind-mounted files do not trigger a container restart)
docker compose -f deploy/docker-compose.yml exec -T caddy caddy reload --config /etc/caddy/Caddyfile || true

say "Mises à jour automatiques"
chmod +x deploy/auto-update.sh
cat > /etc/systemd/system/56north-update.service <<UNIT
[Unit]
Description=56North: deploy the latest version from GitHub
After=network-online.target docker.service
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=$DIR/deploy/auto-update.sh
UNIT
cat > /etc/systemd/system/56north-update.timer <<UNIT
[Unit]
Description=56North: check GitHub for a new version every 5 minutes

[Timer]
OnBootSec=2min
OnUnitActiveSec=5min

[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now 56north-update.timer >/dev/null
echo "Le serveur vérifiera GitHub toutes les 5 minutes et installera seul chaque nouvelle version."
echo "Journal : /var/log/56north-deploy.log"

say "Terminé. Le site sera en ligne sur https://experts.56north.io dès que le certificat HTTPS est obtenu (1 à 2 minutes)."
