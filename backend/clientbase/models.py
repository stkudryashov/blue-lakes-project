from django.db import models

from accounts.models import Club


class FullInfoUser(models.Model):
    username = models.CharField(max_length=32, verbose_name='Клиент')

    first_name = models.CharField(max_length=32, verbose_name='Имя')
    last_name = models.CharField(max_length=32, verbose_name='Фамилия')

    phone_number = models.CharField(max_length=16, verbose_name='Номер телефона')

    current_club = models.ForeignKey(Club, on_delete=models.PROTECT,
                                     related_name='clients', verbose_name='Текущий клуб')

    date_of_register = models.DateTimeField(auto_now_add=True, verbose_name='Дата регистрации')

    def __str__(self):
        return f'{self.username}'

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'
