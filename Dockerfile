# -------- Etapa 1: Build del frontend (Vite) --------
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend

# Instalar deps y compilar
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .

# Variable para llamadas de API desde el frontend (opcional)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# ¡Clave!: que Vite emita rutas bajo /static/
RUN npm run build -- --base=/static/

# -------- Etapa 2: Backend Django --------
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Paquetes del sistema para psycopg2
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Reqs de Python (requirements.txt en la raíz)
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copiamos el backend
COPY backend/ ./backend/

# Copiamos el build del frontend:
# - index.html  -> /app/templates/
# - assets      -> /app/static/assets/
# - images      -> /app/static/images/
RUN mkdir -p templates static static/assets static/images

COPY --from=frontend-build /app/frontend/dist/index.html ./templates/index.html
COPY --from=frontend-build /app/frontend/dist/assets      ./static/assets
COPY --from=frontend-build /app/frontend/dist/images      ./static/images
COPY --from=frontend-build /app/frontend/dist/*.png       ./static/
COPY --from=frontend-build /app/frontend/dist/*.ico       ./static/
COPY --from=frontend-build /app/frontend/dist/site.webmanifest ./static/
COPY --from=frontend-build /app/frontend/dist/CV.pdf      ./static/


# Script de arranque: migrate + collectstatic + gunicorn
COPY backend/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV PORT=8000
CMD ["/entrypoint.sh"]
