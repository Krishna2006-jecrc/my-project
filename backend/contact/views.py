from rest_framework import generics
from backend.permissions import IsAdminOrCreateOnly
from .models import Contact
from .serializers import ContactSerializer


class ContactListCreateAPIView(generics.ListCreateAPIView):

    permission_classes = [IsAdminOrCreateOnly]

    queryset = Contact.objects.all()

    serializer_class = ContactSerializer


class ContactRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):

    permission_classes = [IsAdminOrCreateOnly]

    queryset = Contact.objects.all()

    serializer_class = ContactSerializer
