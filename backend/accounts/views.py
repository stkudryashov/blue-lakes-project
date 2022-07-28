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


class TokenVerifyView(APIView):
    """Получение данных пользователя по JWT Token"""

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
