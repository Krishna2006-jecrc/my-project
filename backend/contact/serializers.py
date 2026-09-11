from rest_framework import serializers
import re
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):

    def validate_phone_number(self, value):
        digits = re.sub(r"\D", "", value)
        if not 10 <= len(digits) <= 15:
            raise serializers.ValidationError("Enter a valid phone number.")
        return value

    class Meta:
        model = Contact
        fields = "__all__"
