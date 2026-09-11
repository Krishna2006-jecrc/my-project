# Create your models here.
from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    description = models.TextField()

    image = models.ImageField(upload_to="destinations/")

    best_time_to_visit = models.CharField(max_length=100)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    CATEGORY_CHOICES = [
    ("Beach", "Beach"),
    ("Hill", "Hill"),
    ("Adventure", "Adventure"),
    ("Religious", "Religious"),
    ("Wildlife", "Wildlife"),
    ("Heritage", "Heritage"),
    ]

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="Heritage"
    )
    rating = models.DecimalField(
    max_digits=3,
    decimal_places=1,
    default=5.0
)

    
    is_featured = models.BooleanField(
        default=False
    )
    popular = models.BooleanField(default=False)
    def __str__(self):
        return self.name
