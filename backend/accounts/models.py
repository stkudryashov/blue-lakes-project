from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """Модель пользователя CRM системы"""

    def __str__(self):
        return f'{self.username}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
