#!/usr/bin/env bash
# Installs the single daily e-mail "point quotidien candidats et prospects"
# (Excel attached, Dropbox when configured). Runs deploy/export-vivier.sh once a
# day at 05:30 UTC (09:30 Mauritius), after the morning sourcing tasks; the mail
# goes out only when something changed or a task left a report. Idempotent.
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
Description=56North: daily candidates and prospects digest (09:30 Mauritius)

[Timer]
OnCalendar=*-*-* 05:30:00 UTC
Persistent=true
AccuracySec=5min

[Install]
WantedBy=timers.target
UNIT
systemctl daemon-reload
systemctl enable --now 56north-vivier.timer
systemctl restart 56north-vivier.timer
echo "OK : point quotidien installé (05:30 UTC = 09:30 Maurice, e-mail seulement s'il y a du nouveau)."
systemctl list-timers 56north-vivier.timer --no-pager | head -3
