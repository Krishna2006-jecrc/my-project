from django.urls import path
from .views import (
    ReviewListCreateAPIView,
    ReviewRetrieveUpdateDestroyAPIView,
)

urlpatterns = [

    path(
        "",
        ReviewListCreateAPIView.as_view(),
        name="review-list",
    ),

    path(
        "<int:pk>/",
        ReviewRetrieveUpdateDestroyAPIView.as_view(),
        name="review-detail",
    ),

]