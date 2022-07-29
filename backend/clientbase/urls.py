from django.urls import path

from .views import FullInfoUserListView


urlpatterns = [
  path('clients/', FullInfoUserListView.as_view(), name='clients-list'),
]
