from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import UserRegistrationSerializer, UserProfileSerializer


class UserRegistrationAPIView(generics.CreateAPIView):

    serializer_class = UserRegistrationSerializer
    
    
class UserProfileAPIView(generics.RetrieveAPIView):
    
    serializer_class = UserProfileSerializer

    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user    