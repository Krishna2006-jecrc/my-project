from rest_framework import generics
from backend.permissions import IsAdminOrReadOnly
from .models import Destination
from .serializers import DestinationSerializer


class DestinationListCreateAPIView(generics.ListCreateAPIView):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer


class DestinationRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
