#!/usr/bin/env bash
# Выкат peter.greentext.ai на два зеркала: Москва (ru.) и Нидерланды (nl.).
#
# Временно, пока мак-мини выключен (31.10.2026). Сайт живёт на серверах 20mm
# в отдельной папке /srv/peter-site и отдельном файле nginx — снести:
#   rm -rf /srv/peter-site /etc/nginx/conf.d/peter.greentext.ai.conf && nginx -s reload
#
# У peter.greentext.ai два A-адреса (оба зеркала): закрыт один — браузер идёт
# на второй. Медленно грузится — mirror-guard.html показывает экран и
# переводит на зеркало, которое у этого человека отвечает быстрее.
#
# Сертификаты — Let's Encrypt по HTTP: файл проверки, которого нет у себя,
# сервер спрашивает у соседа через Tailscale (Москва↔Нидерланды напрямую
# закрыты). Токены и ключи между машинами не ездят.
#
# Запуск: ./deploy-mirrors.sh [http|full]   (http — до выпуска сертификатов)
# Обычный выкат на мини — deploy.sh; этот — на временные зеркала.
set -euo pipefail
MODE="${1:-full}"
SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUILD="$(mktemp -d)"
trap 'rm -rf "$BUILD"' EXIT

# name|ssh|public ip|own mirror|peer tailscale ip|слушать :80 на всех адресах
# В Москве :80 на внешнем адресе держит 20mm, «на всех» nginx не займёт, а
# привязка к адресу Tailscale даёт гонку при загрузке (так 27.10 лежала CRM).
# Поэтому сосед доступен в одну сторону: Москва → Нидерланды.
SERVERS=(
  "ru|root@168.113.156.72|168.113.156.72|ru.peter.greentext.ai|100.104.120.123|no"
  "nl|root@89.125.123.25|89.125.123.25|nl.peter.greentext.ai|100.111.17.29|yes"
)

echo "→ сборка"
rsync -a --exclude .git --exclude deploy --exclude README.md --exclude LICENSE \
  "$SITE_DIR/" "$BUILD/www/"
# Версии файлов — как в deploy.sh: ?v=<время выката>, иначе браузеры держат старое.
STAMP="$(date +%Y%m%d%H%M%S)"
sed -i '' -E "s/\?v=[A-Za-z0-9._-]+/?v=$STAMP/g" "$BUILD/www/index.html"
sed -i '' -E "s#(assets/[A-Za-z0-9._-]+\.(jpg|jpeg|png|svg|webp))(\?v=[A-Za-z0-9]+)?#\1?v=$STAMP#g" "$BUILD/www"/js/*.js
sed -i '' -E "s#(cv/[A-Za-z0-9._-]+\.pdf)(\?v=[A-Za-z0-9]+)?#\1?v=$STAMP#g" "$BUILD/www"/js/*.js "$BUILD/www"/js/locales/*.js
python3 - "$BUILD/www/index.html" "$SITE_DIR/deploy/mirror-guard.html" <<'PY'
import sys
page, guard = open(sys.argv[1]).read(), open(sys.argv[2]).read()
assert '<head>' in page and 'id="mg-style"' not in page
open(sys.argv[1], 'w').write(page.replace('<head>', '<head>\n' + guard, 1))
PY

conf() { # $1 public ip, $2 mirror, $3 peer ts ip, $4 mode, $5 wildcard
  local ip="$1" mirror="$2" peer="$3" mode="$4" any="$5"
  cat <<EOF
# peter.greentext.ai — ВРЕМЕННО, личный сайт Peter, не 20mm (deploy-mirrors.sh).
# Снести вместе с /srv/peter-site, когда вернётся мак-мини.
server {
  # Внешний адрес явно: у 20mm на нём свой блок, и запросы на адрес идут к
  # блокам этого адреса. «80» без адреса — для соседа по Tailscale.
  listen $ip:80;
$( [ "$any" = yes ] && echo "  listen 80;" )
  server_name peter.greentext.ai $mirror;
  access_log /var/log/nginx/peter-site.access.log;
  error_log  /var/log/nginx/peter-site.error.log;

  # Проверка Let's Encrypt: файла нет здесь — он у соседа (второй A-адрес).
  location /.well-known/acme-challenge/ {
    root /srv/peter-site/acme;
    try_files \$uri @peer;
  }
  location @peer {
    if (\$http_x_acme_peer) { return 404; }
    proxy_set_header Host \$host;
    proxy_set_header X-Acme-Peer 1;
    proxy_connect_timeout 5s;
    proxy_pass http://$peer;
  }
EOF
  if [ "$mode" = http ]; then
    cat <<EOF
  location / { root /srv/peter-site/www; }
}
EOF
    return
  fi
  cat <<EOF
  location / { return 301 https://\$host\$request_uri; }
}

server {
  listen $ip:443 ssl http2;
  server_name peter.greentext.ai $mirror;
  ssl_certificate     /etc/letsencrypt/live/peter.greentext.ai/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/peter.greentext.ai/privkey.pem;
  access_log /var/log/nginx/peter-site.access.log;
  error_log  /var/log/nginx/peter-site.error.log;
  root /srv/peter-site/www;
  index index.html;

  location = /mirror-ping.json {
    add_header Access-Control-Allow-Origin * always;
    add_header Cache-Control "no-store" always;
  }
  location = /index.html { add_header Cache-Control "no-cache"; }
  location / { try_files \$uri \$uri/ =404; }
}
EOF
}

for s in "${SERVERS[@]}"; do
  IFS='|' read -r name host ip mirror peer any <<<"$s"
  echo "→ $name ($mirror)"
  printf '{"ok":true,"server":"%s"}\n' "$mirror" > "$BUILD/www/mirror-ping.json"
  ssh -o ConnectTimeout=20 "$host" 'mkdir -p /srv/peter-site/www /srv/peter-site/acme'
  rsync -az --delete -e "ssh -o ConnectTimeout=20" "$BUILD/www/" "$host:/srv/peter-site/www/"
  conf "$ip" "$mirror" "$peer" "$MODE" "$any" | ssh "$host" 'cat > /etc/nginx/conf.d/peter.greentext.ai.conf &&
    nginx -t -q && systemctl reload nginx && echo "   nginx перечитан"'
done
echo "готово ($MODE)"
