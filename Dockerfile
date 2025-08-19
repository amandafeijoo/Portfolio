# -------- Etapa 1: Build del frontend (Vite) --------
    FROM node:20-alpine AS frontend-build
    WORKDIR /app/frontend
    
    # Instalar dependencias y compilar
    COPY frontend/package*.json ./
    RUN npm ci
    COPY frontend/ .
    
    # (Opcional) variable para llamadas de API desde el frontend
    ARG VITE_API_URL
    ENV VITE_API_URL=$VITE_API_URL
    
    # MUY IMPORTANTE: que Vite emita rutas bajo /static/
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
    
    # Dependencias de Python (requirements.txt en la raíz del repo)
    COPY requirements.txt .
    RUN pip install --no-cache-dir --upgrade pip \
     && pip install --no-cache-dir -r requirements.txt
    
    # Copiamos el backend
    COPY backend/ ./backend/
    
    # Copiamos el build del frontend dentro del backend
    #   - index.html  -> backend/templates/index.html  (coincide con TEMPLATES['DIRS'])
    #   - TODO el dist -> backend/static/              (lo recogerá collectstatic)
    RUN mkdir -p backend/templates backend/static
    COPY --from=frontend-build /app/frontend/dist/index.html ./backend/templates/index.html
    COPY --from=frontend-build /app/frontend/dist/          ./backend/static/
    
    # Script de arranque: migrate + collectstatic + gunicorn
    COPY backend/entrypoint.sh /entrypoint.sh
    RUN chmod +x /entrypoint.sh
    
    ENV PORT=8000
    CMD ["/entrypoint.sh"]
    