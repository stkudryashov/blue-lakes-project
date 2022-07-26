from django.urls import path

from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='accounts')

urlpatterns = [
  path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + router.urls
