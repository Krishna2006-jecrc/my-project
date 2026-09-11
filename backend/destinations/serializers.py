from rest_framework import serializers
from .models import Destination
from packages.models import Package


class PackageMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = [
            "id",
            "title",
            "price",
            "duration_days",
            "duration_nights",
            "image",
        ]


class DestinationSerializer(serializers.ModelSerializer):
    packages = PackageMiniSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = "__all__"