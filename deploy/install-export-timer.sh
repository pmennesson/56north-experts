#!/usr/bin/env bash
# Installs the daily export of the expert pool (Excel by e-mail, Dropbox when
# configured). Runs deploy/export-vivier.sh every 2 hours (at :15 UTC); an e-mail
# goes out only when the table changed since the last export. Idempotent.
# Re-run automatically by deploy/auto-update.sh whenever this file changes.
# Manual run as root:
#   sudo bash /opt/56north-experts/deploy/install-export-timer.sh
set -euo pipefail
DIR="/opt/56north-experts"
chmod +x "$DIR/deploy/export-vivier.sh"
cat > /etc/systemd/system/56north-vivier.service <<UNIT
[Unit]
Description=56North: export the expert pool (Excel by e-mail, Dropbox)
After=network-online.target docker.service
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=$DIR/deploy/export-vivier.sh
UNIT
cat > /etc/systemd/system/56north-vivier.timer <<UNIT
[Unit]
Description=56North: check the expert pool every 2 hours, export if it changed

[Timer]
OnCalendar=*-*-* 00/2:15:00 UTC
Persistent=true
AccuracySec=5min

[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now 56north-vivier.timer
systemctl restart 56north-vivier.timer
# One check right away, so a change made before this install goes out now.
systemctl start --no-block 56north-vivier.service || true
echo "OK : export du vivier installé (toutes les 2 h à :15 UTC, e-mail seulement si la base a changé)."
systemctl list-timers 56north-vivier.timer --no-pager | head -3
