from django.contrib import admin

from .models import FullInfoUser


@admin.register(FullInfoUser)
class ClubAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name', 'phone_number', 'current_club')

    fieldsets = (
        (None, {'fields': ('username', 'current_club')}),
        ('Имя', {'fields': ('first_name', 'last_name')}),
        ('Телефон', {'fields': ('phone_number',)}),
        ('Прочее', {'fields': ('date_of_register',)}),
    )

    readonly_fields = ('date_of_register',)
