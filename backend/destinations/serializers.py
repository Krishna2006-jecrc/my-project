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
    image = serializers.SerializerMethodField()
    packages = PackageMiniSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = "__all__"

    def get_image(self, obj):
        if not obj.image:
            return None

        return obj.image.url.replace(
            "/image/upload/v1/media/image/upload/",
            "/image/upload/",
        )

    class Meta:
        model = Destination
        fields = "__all__"