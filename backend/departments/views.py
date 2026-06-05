from django.shortcuts import render
from .models import Department
from .serializers import DeptSerializer
from rest_framework import viewsets,permissions
from rest_framework.response import Response

class deptviewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = DeptSerializer
    queryset = Department.objects.all()
    
    def list(self,request):
        queryset = Department.objects.all()
        serilizer = self.serializer_class(queryset,many=True)
        return Response(serilizer.data)