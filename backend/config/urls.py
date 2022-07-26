from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/accounts/', include('accounts.urls'))
]

admin.site.site_header = 'Blue Lakes CRM'
admin.site.site_title = 'Blue Lakes CRM'
