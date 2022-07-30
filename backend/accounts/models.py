from django.db import models

from django.contrib.auth.models import AbstractUser


class Club(models.Model):
    """
    Модель игрового клуба
    """

    id_name = models.CharField(max_length=32, verbose_name='Идентификатор')

    city = models.CharField(max_length=32, verbose_name='Город')
    street = models.CharField(max_length=32, verbose_name='Улица')

    site_link = models.CharField(max_length=128, verbose_name='Ссылка на сайт')
    bot_link = models.CharField(max_length=128, verbose_name='Ссылка на бота')

    def __str__(self):
        return f'{self.city} - {self.street}'

    class Meta:
        verbose_name = 'Клуб'
        verbose_name_plural = 'Клубы'


class UserPermission(models.Model):
    """
    Модель прав доступа для аккаунтов
    """

    permission = models.CharField(max_length=32, verbose_name='Идентификатор')
    title = models.CharField(max_length=32, verbose_name='Название')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Право доступа'
        verbose_name_plural = 'Права доступа'


class UserType(models.Model):
    """
    Модель групп пользователей с правами
    """

    title = models.CharField(max_length=32, verbose_name='Название группы')
    permissions = models.ManyToManyField(UserPermission, verbose_name='Права группы')

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Группа пользователей'
        verbose_name_plural = 'Группы пользователей'


class User(AbstractUser):
    """
    Модель пользователя CRM системы
    """

    current_club = models.ForeignKey(Club, on_delete=models.PROTECT, related_name='users',
                                     verbose_name='Текущий клуб', null=True)  # null=True только через админ панель

    type = models.ForeignKey(UserType, on_delete=models.PROTECT, related_name='users',
                             verbose_name='Группа', null=True)  # null=True только через админ панель

    def __str__(self):
        return f'{self.username}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
