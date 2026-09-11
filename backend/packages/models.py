

# Create your models here.
from django.db import models
from destinations.models import Destination


class Package(models.Model):

    PACKAGE_TYPES = [
        ("Family", "Family"),
        ("Honeymoon", "Honeymoon"),
        ("Adventure", "Adventure"),
        ("Solo", "Solo"),
        ("Corporate", "Corporate"),
    ]

    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name="packages"
    )

    title = models.CharField(max_length=200)

    description = models.TextField()

    price = models.DecimalField(max_digits=10, decimal_places=2)

    duration_days = models.PositiveIntegerField()

    duration_nights = models.PositiveIntegerField()

    max_people = models.PositiveIntegerField()

    available_seats = models.PositiveIntegerField()

    package_type = models.CharField(
        max_length=20,
        choices=PACKAGE_TYPES
    )

    image = models.ImageField(upload_to="packages/")

    is_featured = models.BooleanField(default=False)

    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title