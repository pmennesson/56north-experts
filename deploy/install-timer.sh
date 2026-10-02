#!/usr/bin/env bash
# Installs (or repairs) the automatic deployment: a systemd timer that runs
# deploy/auto-update.sh every 5 minutes. Idempotent. Run as root:
#   sudo bash /opt/56north-experts/deploy/install-timer.sh
set -euo pipefail
DIR="/opt/56north-experts"
chmod +x "$DIR/deploy/auto-update.sh"
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
AccuracySec=30s

[Install]
WantedBy=timers.target
UNIT
# The repo must be safe for root's git, whoever cloned it.
git config --global --add safe.directory "$DIR" 2>/dev/null || true
systemctl daemon-reload
systemctl enable --now 56north-update.timer
echo "OK : mises à jour automatiques installées (toutes les 5 minutes)."
systemctl list-timers 56north-update.timer --no-pager | head -3
