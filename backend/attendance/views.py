from django.shortcuts import render
from rest_framework import viewsets,permissions
from rest_framework.response import Response
from .models import Attendance
from .serializers import AttendanceSerializer

class AttendanceViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = AttendanceSerializer
    queryset = Attendance.objects.all()
    
    def list(self,request):
        queryset = Attendance.objects.all()
        serializer = self.serializer_class(queryset,many= True)
        return Response(serializer.data)
