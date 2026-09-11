from rest_framework import viewsets
from backend.permissions import IsAdminOrCreateOnly
from .models import Booking
from .serializers import BookingSerializer


class BookingViewSet(viewsets.ModelViewSet):

    permission_classes = [IsAdminOrCreateOnly]

    queryset = Booking.objects.all()

    serializer_class = BookingSerializer
