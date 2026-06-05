from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import permissions,viewsets
from .models import User
from .serializers import UserSerializer
from .token_serializer import MytokenobtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class UserViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    def list(self,request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        
        return Response(serializer.data)
    
class MytokeobtainpairViewst(TokenObtainPairView):
    serializer_class = MytokenobtainPairSerializer
    
    
    