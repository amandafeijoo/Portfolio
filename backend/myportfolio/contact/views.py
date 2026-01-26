import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.conf import settings

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


class ContactCreateView(APIView):
    permission_classes = []  # público

    def post(self, request):
        logger.info("Received contact form submission")

        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            contact = serializer.save()
            data = serializer.validated_data

            # =====================
            # EMAIL NOTIFICATION
            # =====================
            subject = f"New project inquiry from {data['name']}"
            body = (
                f"Name: {data['name']}\n"
                f"Email: {data['email']}\n"
                f"Project type: {data.get('project_type', 'Not specified')}\n"
                f"Budget: {data.get('budget', 'Not specified')}\n\n"
                f"Message:\n{data['message']}"
            )

            email = EmailMessage(
                subject=subject,
                body=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[settings.DEFAULT_FROM_EMAIL],
                reply_to=[data["email"]],
            )

            try:
                email.send(fail_silently=False)
            except Exception as e:
                logger.error(f"Email sending failed: {str(e)}")

            logger.info("Contact form processed successfully")

            return Response(
                {"message": "Your request has been sent successfully."},
                status=status.HTTP_201_CREATED,
            )

        logger.warning(f"Contact form validation errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
