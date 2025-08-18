#!/usr/bin/env sh
set -e

# Migraciones y estáticos (con DATABASE_URL ya disponible en runtime)
python backend/manage.py migrate --noinput
python backend/manage.py collectstatic --noinput

# Arranca gunicorn (ajusta 'myportfolio' si tu paquete se llama distinto)
exec gunicorn myportfolio.wsgi:application --chdir backend --bind 0.0.0.0:${PORT}
