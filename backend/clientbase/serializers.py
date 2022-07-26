from rest_framework import serializers

from clientbase.models import ClientInfo


class ClientInfoSerializer(serializers.ModelSerializer):
    club_name = serializers.CharField(source='club.street', read_only=True)
    date_of_register = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = ClientInfo
        fields = ('id', 'username', 'first_name', 'last_name', 'phone_number',
                  'club', 'club_name', 'date_of_register')

        read_only_fields = ('id',)
