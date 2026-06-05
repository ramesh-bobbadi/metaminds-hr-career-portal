from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('department',views.deptviewset,basename='department')

urlpatterns = [
    
]+router.urls
