#!/usr/bin/env bash
# Выкат peter.greentext.ai на мак-мини (~/www/peter, отдаётся edge-nginx).
#
# Правки должны быть видны СРАЗУ, без ожидания кэша Cloudflare (на .js/.css
# стоит expires 7d) и без ручного purge. Поэтому перед отправкой каждому
# статик-файлу в index.html проставляется свежая версия ?v=<штамп>: браузер и
# Cloudflare видят новый URL и обязаны сходить за ним на origin. Сам index.html
# не кэшируется на edge (cf-cache-status: DYNAMIC), так что новые ссылки
# доезжают мгновенно.
set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${PETER_SITE_HOST:-mini}"
DEST="${PETER_SITE_DEST:-~/www/peter/}"
STAMP="$(date +%Y%m%d%H%M%S)"

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

rsync -a \
  --exclude '.git' --exclude 'deploy' --exclude 'README.md' --exclude 'LICENSE' \
  "$SITE_DIR/" "$STAGE/"

# ?v=3 → ?v=20260818… во всех ссылках на css/js
sed -i '' -E "s/\?v=[A-Za-z0-9._-]+/?v=$STAMP/g" "$STAGE/index.html"

rsync -az --delete -e ssh "$STAGE/" "$HOST:$DEST"

echo "выкачено, версия статики: $STAMP"
echo "проверка:"
curl -s "https://peter.greentext.ai/index.html" | grep -o "ru\.js?v=[0-9]*" | head -1
