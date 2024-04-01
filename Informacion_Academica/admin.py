from django.contrib import admin
from .models import ProgramaAcademico, Materia, Tema, Alumno, Personal, Rango, AsesoriaAcademica, AsesorAcademico, Tipo_Insidencia, Ticket
# Register your models here.


class AlumnoAdmin(admin.ModelAdmin):
    list_display = ('Matricula', 'Nombre_Alumno', 'Carrera')
    list_filter = ['Carrera']
    search_fields = ['Matricula']


class PersonalAdmin(admin.ModelAdmin):
    list_display = ('Matricula')


class AsesoriasAdmin(admin.ModelAdmin):
    list_display = ('Matricula', 'Nombre_Alumno', 'Materia', 'Tema', 'Estatus')


class TipoInsidenciaAdmin(admin.ModelAdmin):
    list_display = ('id_insidencia', 'Tipo')


class TicketAdmin(admin.ModelAdmin):
    list_display = ('id_Ticket', 'asunto', 'descripcion', 'Estatus')


admin.site.register(ProgramaAcademico)
admin.site.register(Materia)
admin.site.register(Tema)
admin.site.register(Rango)
admin.site.register(Personal)
admin.site.register(Alumno, AlumnoAdmin)
admin.site.register(AsesoriaAcademica, AsesoriasAdmin)
admin.site.register(AsesorAcademico)
admin.site.register(Tipo_Insidencia, TipoInsidenciaAdmin)
admin.site.register(Ticket, TicketAdmin)
