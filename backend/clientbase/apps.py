from django.apps import AppConfig


class ClientbaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'clientbase'

    verbose_name = 'База клиентов'
