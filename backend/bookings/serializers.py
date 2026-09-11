from rest_framework import serializers
from django.utils import timezone
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = "__all__"

    def validate(self, attrs):
        package = attrs.get("package")
        travelers = attrs.get("travelers")
        travel_date = attrs.get("travel_date")

        if travel_date and travel_date < timezone.localdate():
            raise serializers.ValidationError({"travel_date": "Please select a future travel date."})
        if package and not package.is_available:
            raise serializers.ValidationError({"package": "This package is not currently available."})
        if package and travelers and travelers > package.max_people:
            raise serializers.ValidationError({"travelers": f"This package allows a maximum of {package.max_people} travellers."})
        if package and travelers and travelers > package.available_seats:
            raise serializers.ValidationError({"travelers": f"Only {package.available_seats} seats are currently available."})
        return attrs
