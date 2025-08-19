#!/usr/bin/env sh
set -e

echo "🧪 Listando contenidos ANTES de collectstatic"
echo "— /app/static:"
ls -lah /app/static || true
echo "— /app/static/images:"
ls -lah /app/static/images || true

echo "🧪 Buscando los MP4 con Django findstatic (antes)"
python backend/manage.py findstatic images/demo_fitlife_portfolio.mp4 -v 3 || true
python backend/manage.py findstatic images/demo_dinebooker_portfolio.mp4 -v 3 || true

echo "🏗️ collectstatic"
python backend/manage.py collectstatic --noinput -v 2

echo "🧪 Listando contenidos DESPUÉS de collectstatic"
echo "— /app/staticfiles/images:"
ls -lah /app/staticfiles/images || true

echo "🧪 Buscando los MP4 con Django findstatic (después)"
python backend/manage.py findstatic images/demo_fitlife_portfolio.mp4 -v 3 || true
python backend/manage.py findstatic images/demo_dinebooker_portfolio.mp4 -v 3 || true

echo "🗃️ migrate"
python backend/manage.py migrate --noinput

echo "🚀 arrancando gunicorn"
exec gunicorn myportfolio.wsgi:application --chdir backend --bind 0.0.0.0:${PORT}
