from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=3, max_length=48)
    password = serializers.CharField(write_only=True, required=True)

    first_name = serializers.CharField(max_length=48, required=True)
    last_name = serializers.CharField(max_length=48, required=True)

    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email')
        read_only_fields = ('id',)
