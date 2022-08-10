import requests
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from accounts.models import User, Club
from accounts.serializers import UserSerializer, ClubSerializer


class UserViewSet(ModelViewSet):
    """
    Создание и получение пользователей CRM
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer


class TokenVerifyView(APIView):
    """
    Получение данных пользователя по JWT Token
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class ClubViewSet(ModelViewSet):
    """
    Создание и получение объектов клуба
    """

    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class ClubStatusView(APIView):
    """
    Проверка доступности сайта клуба
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            response = requests.get(request.POST.get('site_link'))
            return Response({'status': response.status_code})
        except ConnectionError:
            return Response({'status': 500})
