from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "full_name",
        "package",
        "travel_date",
        "travelers",
        "phone",
        "status",
    )

    list_filter = (
        "status",
        "travel_date",
    )

    search_fields = (
        "full_name",
        "phone",
        "email",
    )

    ordering = ("-created_at",)