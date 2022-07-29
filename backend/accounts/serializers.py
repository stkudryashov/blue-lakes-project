from rest_framework import serializers

from .models import User, UserType, UserPermission, Club


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ('id_name', 'city', 'street', 'site_link', 'bot_link')


class UserPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPermission
        fields = ('permission', 'title')


class UserTypeSerializer(serializers.ModelSerializer):
    permissions = UserPermissionSerializer(read_only=True, many=True)

    class Meta:
        model = UserType
        fields = ('title', 'permissions')


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=3, max_length=48)
    password = serializers.CharField(write_only=True, required=True)

    first_name = serializers.CharField(max_length=48, required=True)
    last_name = serializers.CharField(max_length=48, required=True)

    email = serializers.EmailField(required=True)

    current_club = ClubSerializer(read_only=True)
    type = UserTypeSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email',
                  'current_club', 'type')

        read_only_fields = ('id',)
