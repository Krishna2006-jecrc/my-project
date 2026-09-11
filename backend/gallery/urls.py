from django.urls import path
from .views import (
    GalleryListCreateAPIView,
    GalleryRetrieveUpdateDestroyAPIView,
)

urlpatterns = [

    path(
        "",
        GalleryListCreateAPIView.as_view(),
        name="gallery-list",
    ),

    path(
        "<int:pk>/",
        GalleryRetrieveUpdateDestroyAPIView.as_view(),
        name="gallery-detail",
    ),

]