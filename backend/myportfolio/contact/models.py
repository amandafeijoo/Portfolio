from django.db import models

class Contact(models.Model):
    PROJECT_CHOICES = [
        ("Essential Website", "Essential Website"),
        ("Business Website", "Business Website"),
        ("Custom Web Application", "Custom Web Application"),
        ("Not sure yet", "Not sure yet / Let’s discuss"),
    ]

    BUDGET_CHOICES = [
        ("< 1.000 €", "Under €1.000"),
        ("1.000 – 2.000 €", "€1.000 – €2.000"),
        ("2.000 – 4.000 €", "€2.000 – €4.000"),
        ("4.000 €+", "€4.000+"),
        ("Not sure", "Not sure yet"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()

    project_type = models.CharField(
        max_length=50,
        choices=PROJECT_CHOICES,
    )

    budget = models.CharField(
        max_length=20,
        choices=BUDGET_CHOICES,
        blank=True,
        null=True,
    )

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} – {self.project_type}"
