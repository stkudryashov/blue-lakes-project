from django.contrib import admin

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin

from .models import User, UserType, UserPermission, Club


@admin.register(UserPermission)
class UserPermissionAdmin(admin.ModelAdmin):
    list_display = ('title', 'permission')


@admin.register(UserType)
class UserTypeAdmin(admin.ModelAdmin):
    list_display = ('title',)
    filter_horizontal = ('permissions',)


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    """Панель управления пользователями"""

    model = User

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Личная информация', {'fields': ('first_name', 'last_name', 'current_club')}),
        ('Права доступа', {
            'fields': ('type', 'is_active', 'is_staff', 'is_superuser',),
        }),
        ('Прочее', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'current_club', 'email', 'first_name', 'last_name', 'password1', 'password2')}),
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
