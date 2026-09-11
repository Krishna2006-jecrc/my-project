from rest_framework import generics
from backend.permissions import IsAdminOrReadOnly
from .models import Package
from .serializers import PackageSerializer


class PackageListCreateAPIView(generics.ListCreateAPIView):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Package.objects.all()

    serializer_class = PackageSerializer


class PackageRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    permission_classes = [IsAdminOrReadOnly]

    queryset = Package.objects.all()

    serializer_class = PackageSerializer
