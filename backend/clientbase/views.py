from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import FullInfoUser
from .serializers import FullInfoUserSerializer


class FullInfoUserViewSet(ReadOnlyModelViewSet):
    """Создание и получение пользователей CRM"""

    permission_classes = [IsAuthenticated]

    queryset = FullInfoUser.objects.all()
    serializer_class = FullInfoUserSerializer
