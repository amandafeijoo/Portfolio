# -------- Etapa 1: Build del frontend (Vite) --------
    FROM node:20-alpine AS frontend-build
    WORKDIR /app/frontend
    
    COPY frontend/package*.json ./
    RUN npm ci
    COPY frontend/ .
    
    # Importante: que Vite emita rutas bajo /static/
    ARG VITE_API_URL
    ENV VITE_API_URL=$VITE_API_URL
    RUN npm run build -- --base=/static/
    
    # -------- Etapa 2: Backend Django --------
    FROM python:3.11-slim
    
    ENV PYTHONDONTWRITEBYTECODE=1 \
        PYTHONUNBUFFERED=1
    
    RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential libpq-dev \
     && rm -rf /var/lib/apt/lists/*
    
    WORKDIR /app
    
    # Python deps
    COPY requirements.txt .
    RUN pip install --no-cache-dir --upgrade pip \
     && pip install --no-cache-dir -r requirements.txt
    
    # Backend
    COPY backend/ ./backend/
    
    # Frontend: copiamos TODO el dist a /app/static
    # y también dejamos una copia de index.html en /app/templates
    RUN mkdir -p static templates
    COPY --from=frontend-build /app/frontend/dist/ ./static/
    COPY --from=frontend-build /app/frontend/dist/index.html ./templates/index.html
    
    # Entrypoint
    COPY backend/entrypoint.sh /entrypoint.sh
    RUN chmod +x /entrypoint.sh
    
    ENV PORT=8000
    CMD ["/entrypoint.sh"]
    
