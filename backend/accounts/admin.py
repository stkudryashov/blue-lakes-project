from django.contrib import admin

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin

from .models import User, Club


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    """Панель управления пользователями"""

    model = User

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'current_club')}),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser',),
        }),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'first_name', 'last_name', 'password1', 'password2')}),
    )

    list_display = ('username', 'email', 'first_name', 'last_name', 'date_joined')


admin.site.unregister(Group)


@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    list_display = ('id_name', 'city', 'street')

    fieldsets = (
        (None, {'fields': ('id_name',)}),
        ('Адрес', {'fields': ('city', 'street')}),
        ('Ссылки', {'fields': ('site_link', 'bot_link',)})
    )
