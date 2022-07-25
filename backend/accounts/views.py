from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """Создание и получение пользователей CRM"""

    queryset = User.objects.all()
    serializer_class = UserSerializer
