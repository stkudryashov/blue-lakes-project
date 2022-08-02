from django.urls import path

from rest_framework import routers

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import UserViewSet, TokenVerifyView, ClubViewSet, ClubStatusView

router = routers.DefaultRouter()

router.register(r'users', UserViewSet, basename='users')
router.register(r'clubs', ClubViewSet, basename='clubs')

urlpatterns = [
  path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('login/verify/', TokenVerifyView.as_view(), name='token_verify'),

  path('clubs/status/', ClubStatusView.as_view(), name='club_status')
] + router.urls
