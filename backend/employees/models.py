from django.db import models
from django.conf import settings
from departments.models import Department
class Employee(models.Model):
    
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null = True,
        related_name = 'employee'
    )
    
    department = models.ForeignKey(
        Department,
        on_delete = models.SET_NULL,
        null=True,
        related_name='employees'
    )
    
    employee_id = models.CharField(
        max_length=20,
        unique=True
    )
    
    designation = models.CharField(max_length=100)
    
    joining_date = models.DateField()
    
    salary = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    
    status = models.CharField(
        max_length=20,
        default='ACTIVE'
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.employee_id} - {self.user.full_name}"