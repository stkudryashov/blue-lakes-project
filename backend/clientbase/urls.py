from django.urls import path
from rest_framework import routers

from .views import FullInfoUserViewSet

router = routers.DefaultRouter()
router.register(r'clients', FullInfoUserViewSet, basename='clients')

urlpatterns = router.urls
