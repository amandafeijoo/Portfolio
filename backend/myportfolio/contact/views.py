import logging
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from .serializers import ContactSerializer
from django.utils.decorators import method_decorator
from django.views import View
from django.core.mail import EmailMessage
from django.conf import settings

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class ContactView(View):
    def post(self, request, *args, **kwargs):
        try:
            logger.info('Received POST request at /contact/')
            data = JSONParser().parse(request)
            logger.debug(f'Request data: {data}')
            
            serializer = ContactSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                logger.info('Contact form submitted successfully.')
                
                # Construir el mensaje de correo electrónico
                email_subject = f"New message from {data.get('name')}"
                email_message = f"Message: {data.get('message')}\n\nFrom: {data.get('name')} <{data.get('email')}>"
                
                # Crear el objeto EmailMessage
                email = EmailMessage(
                    subject=email_subject,
                    body=email_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,  # Your email
                    to=[settings.DEFAULT_FROM_EMAIL],
                    reply_to=[data.get('email')]  # User's email
                )
                
                # Enviar el correo electrónico
                email.send(fail_silently=False)
                
                return JsonResponse({'message': 'Your message has been sent successfully!'}, status=201)
            
            logger.warning(f'Serializer errors: {serializer.errors}')
            return JsonResponse(serializer.errors, status=400)
        except Exception as e:
            logger.error(f'Error processing request: {str(e)}')
            return JsonResponse({'error': str(e)}, status=400)