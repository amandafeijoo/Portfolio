# ---- Etapa 1: build del frontend (Vite) ----
    FROM node:20-alpine AS frontend-build
    WORKDIR /app/frontend
    
    # Instalar deps y compilar
    COPY frontend/package*.json ./
    RUN npm ci
    COPY frontend/ .
    # Railway te pasa VITE_API_URL como variable de entorno
    ARG VITE_API_URL
    ENV VITE_API_URL=$VITE_API_URL
    RUN npm run build   # genera /app/frontend/dist
    
    # ---- Etapa 2: backend Django ----
    FROM python:3.11-slim
    
    ENV PYTHONDONTWRITEBYTECODE=1 \
        PYTHONUNBUFFERED=1
    
    # Paquetes del sistema para psycopg2
    RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential libpq-dev \
     && rm -rf /var/lib/apt/lists/*
    
    WORKDIR /app
    
    # Reqs de Python (de la raíz)
    COPY requirements.txt .
    RUN pip install --no-cache-dir --upgrade pip \
     && pip install --no-cache-dir -r requirements.txt
    
    # Copiamos el backend
    COPY backend/ ./backend/
    
    # Copiamos el build del frontend:
    # - index.html a templates/
    # - assets a static/assets/
    RUN mkdir -p templates static/assets
    COPY --from=frontend-build /app/frontend/dist/index.html ./templates/index.html
    COPY --from=frontend-build /app/frontend/dist/assets ./static/assets
    
    # Script de arranque: migrate + collectstatic + gunicorn
    COPY backend/entrypoint.sh /entrypoint.sh
    RUN chmod +x /entrypoint.sh
    
    ENV PORT=8000
    CMD ["/entrypoint.sh"]
    