#!/usr/bin/env bash
# Installs the daily export of the expert pool (Excel by e-mail, Dropbox when
# configured). Runs deploy/export-vivier.sh every morning at 06:15 UTC; an e-mail
# goes out only when the table changed since the last export. Idempotent. Run as root:
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
Description=56North: daily check of the expert pool, export if it changed

[Timer]
OnCalendar=*-*-* 06:15:00 UTC
Persistent=true
AccuracySec=5min

[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now 56north-vivier.timer
echo "OK : export quotidien du vivier installé (06:15 UTC, e-mail seulement si la base a changé)."
systemctl list-timers 56north-vivier.timer --no-pager | head -3
