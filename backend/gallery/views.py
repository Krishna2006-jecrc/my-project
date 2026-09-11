from rest_framework import generics
from .models import Gallery
from .serializers import GallerySerializer


class GalleryListCreateAPIView(generics.ListCreateAPIView):

    queryset = Gallery.objects.all()

    serializer_class = GallerySerializer


class GalleryRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    queryset = Gallery.objects.all()

    serializer_class = GallerySerializer
