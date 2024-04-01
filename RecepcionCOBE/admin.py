from django.contrib import admin
from .models import Servicio, RegistroDiario
# Register your models here.


class RegistroDiarioInfo(admin.ModelAdmin):
    list_display = ('Alumno', 'Servicio', 'Telefono')


admin.site.register(Servicio)
admin.site.register(RegistroDiario, RegistroDiarioInfo)
