from django.db import models

# Create your models here.
from django.db import models


class Contact(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    phone_number = models.CharField(max_length=15)

    subject = models.CharField(max_length=200)

    message = models.TextField()

    is_replied = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name