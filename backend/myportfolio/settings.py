import os
from pathlib import Path
from decouple import config
import dj_database_url
import mimetypes


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent  # /app/backend
REPO_ROOT = BASE_DIR.parent                        # /app

mimetypes.add_type("video/mp4", ".mp4", True)
mimetypes.add_type("video/webm", ".webm", True)
mimetypes.add_type("video/ogg", ".ogv", True)


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', default=False, cast=bool)


ALLOWED_HOSTS = [
    "localhost", "127.0.0.1",
    "webcode-art.com", "www.webcode-art.com",
    "portfolio-production-8d11.up.railway.app",  
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://webcode-art.com",
    "https://www.webcode-art.com",
    "https://portfolio-production-8d11.up.railway.app",
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
    "https://webcode-art.com",
    "https://www.webcode-art.com",
    "https://portfolio-production-8d11.up.railway.app",
]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'myportfolio.contact',
    'corsheaders',
]
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",  # <- imprescindible
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")


ROOT_URLCONF = 'myportfolio.urls'

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [REPO_ROOT / "templates"],   # <-- /app/templates
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = 'myportfolio.wsgi.application'


# Database
# Usamos únicamente DATABASE_URL con dj-database-url
DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL'),
        conn_max_age=600,
        ssl_require=True,
    )
}



CSRF_COOKIE_HTTPONLY = False
CSRF_COOKIE_SECURE = False

# CSRF_COOKIE_HTTPONLY = True
# CSRF_COOKIE_SECURE = True
# SESSION_COOKIE_SECURE = True

# Email (contact form)

EMAIL_BACKEND    = config('EMAIL_BACKEND')
EMAIL_HOST       = config('EMAIL_HOST')
EMAIL_PORT       = config('EMAIL_PORT', cast=int)
EMAIL_USE_TLS    = config('EMAIL_USE_TLS', cast=bool)
EMAIL_HOST_USER  = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL  = config('DEFAULT_FROM_EMAIL')


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE     = 'UTC'
USE_I18N      = True
USE_L10N      = True
USE_TZ        = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = "/static/"
STATICFILES_DIRS = [REPO_ROOT / "static"]   
STATIC_ROOT = REPO_ROOT / "staticfiles"     # <-- salida de collectstatic: /app/staticfiles
STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"


# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
