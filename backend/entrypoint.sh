#!/usr/bin/env sh
set -e

echo ">>> Migraciones"
python backend/manage.py migrate --noinput

echo ">>> Collectstatic (limpiando anteriores)"
python backend/manage.py collectstatic --noinput --clear

# --- CREAR SUPERUSER (solo si RUN_CREATE_SUPERUSER=true) ---
if [ "${RUN_CREATE_SUPERUSER:-false}" = "true" ]; then
  echo ">>> Verificando/creando superuser '${DJANGO_SUPERUSER_USERNAME:-admin}'..."
  python backend/manage.py shell <<'PY'
import os
from django.contrib.auth import get_user_model
User = get_user_model()
u = os.environ.get("DJANGO_SUPERUSER_USERNAME", "admin")
e = os.environ.get("DJANGO_SUPERUSER_EMAIL", "admin@example.com")
p = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "admin123")
if not User.objects.filter(username=u).exists():
    User.objects.create_superuser(username=u, email=e, password=p)
    print(f">>> Superuser creado: {u}")
else:
    print(f">>> Superuser ya existía: {u}")
PY
  # Por seguridad, elimina el password del entorno de este proceso
  unset DJANGO_SUPERUSER_PASSWORD
fi
# -------------------------------------------------------------

echo ">>> Contenido de /app/static/images (antes de collectstatic)"
ls -lah /app/static/images || true

echo ">>> Contenido de /app/staticfiles/images (después de collectstatic)"
ls -lah /app/staticfiles/images || true

echo ">>> findstatic para ver si Django encuentra los videos"
python backend/manage.py findstatic images/demo_fitlife_portfolio.mp4 -v 3 || true
python backend/manage.py findstatic images/demo_dinebooker_portfolio.mp4 -v 3 || true

echo '>>> Arrancando gunicorn'
exec gunicorn myportfolio.wsgi:application --chdir backend --bind 0.0.0.0:${PORT}
