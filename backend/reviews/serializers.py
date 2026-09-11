from rest_framework import serializers
from .models import Review
from packages.serializers import PackageSerializer
from packages.models import Package


class ReviewSerializer(serializers.ModelSerializer):

    package = PackageSerializer(read_only=True)

    package_id = serializers.PrimaryKeyRelatedField(
        queryset=Package.objects.all(),
        source="package",
        write_only=True
    )

    class Meta:
        model = Review
        fields = "__all__"