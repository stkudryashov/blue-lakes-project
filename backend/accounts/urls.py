from rest_framework import routers

from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='accounts')

urlpatterns = [

] + router.urls
