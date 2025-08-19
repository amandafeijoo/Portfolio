#!/usr/bin/env sh
set -e

echo ">>> Migraciones"
python backend/manage.py migrate --noinput

echo ">>> Collectstatic (limpiando anteriores)"
python backend/manage.py collectstatic --noinput --clear

echo ">>> Contenido de /app/static/images (antes de collectstatic)"
ls -lah /app/static/images || true

echo ">>> Contenido de /app/staticfiles/images (después de collectstatic)"
ls -lah /app/staticfiles/images || true

echo ">>> findstatic para ver si Django encuentra los videos"
python backend/manage.py findstatic images/demo_fitlife_portfolio.mp4 -v 3 || true
python backend/manage.py findstatic images/demo_dinebooker_portfolio.mp4 -v 3 || true

echo ">>> Arrancando gunicorn"
exec gunicorn myportfolio.wsgi:application --chdir backend --bind 0.0.0.0:${PORT}
