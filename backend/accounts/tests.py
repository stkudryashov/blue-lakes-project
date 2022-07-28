from django.urls import reverse

from rest_framework import status
from rest_framework.test import APITestCase

from faker import Faker

from .models import User, Club


class AccountsTests(APITestCase):
    HOST_URL = 'http://127.0.0.1:8000/api/'

    @classmethod
    def setUpTestData(cls):
        cls.club = Club.objects.create(
            id_name='id_name',
            city='city',
            street='street',
            site_link='site_link',
            bot_link='bot_link'
        )

    def test_create_account(self):
        url = self.HOST_URL + 'accounts/'

        fake = Faker('ru-RU')

        data = {
            'username': fake.user_name(),
            'password': fake.password(),
            'first_name': fake.first_name(),
            'last_name': fake.last_name(),
            'email': fake.email(),
            'current_club': self.club.id
        }

        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.get().username, data.get('username'))
