from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """Создание и получение пользователей CRM"""

    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserInfoView(APIView):
    """Получение информации об аккаунте отправителя запроса"""

    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Возвращает информацию об аккаунте"""

        user = request.user
        data = {'username': user.username, 'current_club': user.current_club.street}

        return Response(data)
