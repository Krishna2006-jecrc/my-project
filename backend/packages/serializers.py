from rest_framework import serializers
from .models import Package
from destinations.models import Destination
from destinations.serializers import DestinationSerializer


class PackageSerializer(serializers.ModelSerializer):

    destination = DestinationSerializer(read_only=True)

    destination_id = serializers.PrimaryKeyRelatedField(
        queryset=Destination.objects.all(),
        source="destination",
        write_only=True
    )

    class Meta:
        model = Package
        fields = "__all__"