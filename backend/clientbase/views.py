from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated

from clientbase.models import ClientInfo
from clientbase.serializers import ClientInfoSerializer


class ClientInfoReadOnlyView(ReadOnlyModelViewSet):
    """
    Получение информации о клиентах
    """

    permission_classes = [IsAuthenticated]

    queryset = ClientInfo.objects.all()
    serializer_class = ClientInfoSerializer
