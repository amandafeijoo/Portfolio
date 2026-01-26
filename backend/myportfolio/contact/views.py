import logging
import resend

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


class ContactCreateView(APIView):
    permission_classes = []  # endpoint público

    def post(self, request):
        logger.info("Received contact form submission")

        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            logger.warning(f"Contact form validation errors: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        data = serializer.validated_data

        # 🔐 Inicializar Resend SOLO aquí
        resend.api_key = settings.RESEND_API_KEY

        # =====================
        # 1️⃣ EMAIL PARA TI (NOTIFICACIÓN)
        # =====================
        try:
            resend.emails.send({
                "from": "Webcode-Art <contact@webcode-art.com>",
                "to": ["amandaflores@webcode-art.com"],
                "reply_to": data["email"],
                "subject": f"New project inquiry from {data['name']}",
                "html": f"""
                    <h3>New contact form submission</h3>
                    <p><strong>Name:</strong> {data['name']}</p>
                    <p><strong>Email:</strong> {data['email']}</p>
                    <p><strong>Project type:</strong> {data.get('project_type', 'Not specified')}</p>
                    <p><strong>Budget:</strong> {data.get('budget', 'Not specified')}</p>
                    <p><strong>Message:</strong></p>
                    <p>{data['message']}</p>
                """
            })
        except Exception as e:
            logger.error(f"Admin email failed: {e}")

        # =====================
        # 2️⃣ CONFIRMACIÓN AL CLIENTE (EN + ES)
        # =====================
        try:
            resend.emails.send({
                "from": "Amanda Flores – Webcode-Art <contact@webcode-art.com>",
                "to": [data["email"]],
                "subject": "Thank you for contacting Webcode-Art",
                "html": f"""
                    <p><strong>Hello {data['name']},</strong></p>

                    <p>Thank you for reaching out to me ✨  
                    I’ve received your message successfully and will get back to you as soon as possible.</p>

                    <p>Best regards,<br>
                    <strong>Amanda Flores</strong><br>
                    Webcode-Art</p>

                    <hr style="margin:30px 0;" />

                    <p><strong>Hola {data['name']},</strong></p>

                    <p>Gracias por ponerte en contacto conmigo ✨  
                    He recibido tu mensaje correctamente y te responderé lo antes posible.</p>

                    <p>Un saludo,<br>
                    <strong>Amanda Flores</strong><br>
                    Webcode-Art</p>
                """
            })
        except Exception as e:
            logger.error(f"Client confirmation email failed: {e}")

        logger.info("Contact form processed successfully")

        return Response(
            {"message": "Your request has been sent successfully."},
            status=status.HTTP_201_CREATED,
        )
