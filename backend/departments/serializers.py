from rest_framework import serializers
from .models import Department

class DeptSerializer(serializers.ModelSerializer):
     
     class Meta:
         model = Department
         fields = ['name', 'code', 'description', 'manager', 'is_active', 'created_at',]
         