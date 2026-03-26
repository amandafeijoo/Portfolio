import logging
import resend

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)

resend.api_key = settings.RESEND_API_KEY


class ContactCreateView(APIView):
    permission_classes = []

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        data = serializer.validated_data

        # =====================
        # 1️⃣ EMAIL PARA TI
        # =====================
        try:
            resend.Emails.send({
                "from": "Webcode-Art <contact@webcode-art.com>",
                "to": ["amandaflores@webcode-art.com"],
                "reply_to": data["email"],
                "subject": f"New project inquiry from {data['name']}",
                "text": f"""
New contact form submission

Name: {data['name']}
Email: {data['email']}
Project type: {data.get('project_type', 'Not specified')}
Budget: {data.get('budget', 'Not specified')}

Message:
{data['message']}
""",
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
        # 2️⃣ CONFIRMACIÓN CLIENTE
        # =====================
        try:
            resend.Emails.send({
                "from": "Webcode-Art <amandaflores@webcode-art.com>",
                "to": [data["email"]],
                "subject": "Your message has been received — Webcode-Art",
                "text": f"""
Hello {data['name']},

Thank you for reaching out.
I’ve received your message successfully and will reply as soon as possible.

Best regards,

Amanda Flores
WEBCODE-ART
Design · Development · Experience
www.webcode-art.com

---

Hola {data['name']},

Gracias por ponerte en contacto conmigo.
He recibido tu mensaje correctamente y te responderé lo antes posible.

Un saludo,

Amanda Flores
WEBCODE-ART
Design · Development · Experience
www.webcode-art.com
""",
                "html": f"""
                    <p><strong>Hello {data['name']},</strong></p>

                    <p>
                        Thank you for reaching out. I’ve received your message successfully
                        and will reply as soon as possible.
                    </p>

                    <p style="margin-top:24px;">
                        Best regards,<br><br>

                        <strong style="letter-spacing:0.04em;">Amanda Flores</strong><br>
                        <span style="letter-spacing:0.12em; font-size:12px;">WEBCODE-ART</span><br>
                        <span style="color:#888;">Design · Development · Experience</span><br>

                        <a href="https://www.webcode-art.com" style="color:#000; text-decoration:none;">
                            www.webcode-art.com
                        </a>
                    </p>

                    <hr style="margin:30px 0;" />

                    <p><strong>Hola {data['name']},</strong></p>

                    <p>
                        Gracias por ponerte en contacto conmigo. He recibido tu mensaje correctamente
                        y te responderé lo antes posible.
                    </p>

                    <p style="margin-top:24px;">
                        Un saludo,<br><br>

                        <strong style="letter-spacing:0.04em;">Amanda Flores</strong><br>
                        <span style="letter-spacing:0.12em; font-size:12px;">WEBCODE-ART</span><br>
                        <span style="color:#888;">Design · Development · Experience</span><br>

                        <a href="https://www.webcode-art.com" style="color:#000; text-decoration:none;">
                            www.webcode-art.com
                        </a>
                    </p>
                """
            })
        except Exception as e:
            logger.error(f"Client confirmation email failed: {e}")

        return Response(
            {"message": "Your request has been sent successfully."},
            status=status.HTTP_201_CREATED,
        )