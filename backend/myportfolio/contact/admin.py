from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "project_type",
        "budget",
        "created_at",
    )

    list_filter = (
        "project_type",
        "budget",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "message",
    )

    ordering = ("-created_at",)

    readonly_fields = ("created_at",)

    fieldsets = (
        ("Contact info", {
            "fields": ("name", "email")
        }),
        ("Project details", {
            "fields": ("project_type", "budget", "message")
        }),
        ("Metadata", {
            "fields": ("created_at",)
        }),
    )
