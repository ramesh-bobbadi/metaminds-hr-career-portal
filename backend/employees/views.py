from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets,permissions
from .serializers import EmployeeSerializer
from .models import Employee

class EmployeeViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    
    def list(self,request):
        queryset = Employee.objects.all()
        serializer = self.serializer_class(queryset,many = True)
        
        return Response(serializer.data)
