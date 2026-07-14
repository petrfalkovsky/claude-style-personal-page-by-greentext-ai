#!/usr/bin/env bash
# Example deploy: rsync the static site to your server and reload nginx.
# Replace HOST and KEY with your own values. Any static hosting works too
# (GitHub Pages, Netlify, S3) — this script is only for the nginx route.
set -euo pipefail

KEY="$HOME/.ssh/your-server-key.pem"
HOST="ubuntu@your.server.ip"
SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

rsync -az --delete -e "ssh -i $KEY" \
  --exclude deploy --exclude cv/'*.html' \
  "$SITE_DIR/" "$HOST:/tmp/personal-site/"

ssh -i "$KEY" "$HOST" '
  sudo mkdir -p /var/www/personal-site &&
  sudo rsync -a --delete /tmp/personal-site/ /var/www/personal-site/ &&
  rm -rf /tmp/personal-site &&
  sudo nginx -t && sudo systemctl reload nginx
'
