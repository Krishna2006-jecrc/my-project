from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "phone_number", "email", "subject", "is_replied", "created_at")
    list_filter = ("is_replied", "created_at")
    search_fields = ("name", "phone_number", "email", "subject")
    ordering = ("-created_at",)

