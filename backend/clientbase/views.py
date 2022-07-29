from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from .models import FullInfoUser
from .serializers import FullInfoUserSerializer


class FullInfoUserListView(ListAPIView):
    """Создание и получение пользователей CRM"""

    permission_classes = [IsAuthenticated]

    queryset = FullInfoUser.objects.all()
    serializer_class = FullInfoUserSerializer
