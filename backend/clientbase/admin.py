from django.contrib import admin

from clientbase.models import ClientInfo


@admin.register(ClientInfo)
class ClientInfoAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name', 'phone_number', 'club')

    fieldsets = (
        (None, {'fields': ('username', 'club')}),
        ('Имя', {'fields': ('first_name', 'last_name')}),
        ('Телефон', {'fields': ('phone_number',)}),
        ('Прочее', {'fields': ('date_of_register',)}),
    )

    readonly_fields = ('date_of_register',)
