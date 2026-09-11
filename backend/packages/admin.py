from django.contrib import admin
from .models import Package

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ("title", "destination", "price", "package_type", "available_seats", "is_available", "is_featured")
    list_filter = ("package_type", "is_available", "is_featured")
    search_fields = ("title", "destination__name")
