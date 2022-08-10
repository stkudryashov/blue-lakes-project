from rest_framework import routers

from clientbase.views import ClientInfoReadOnlyView

router = routers.DefaultRouter()
router.register(r'clients', ClientInfoReadOnlyView, basename='clients')

urlpatterns = router.urls
