"""
URL configuration for Administracion_COBE project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Administracion_COBE.views import Home, FormularioAsesoria, FormularioAsesoriasNuevosAlumnos, AlertaConfirmacion, HomeRecepcion, RegistroDiario, UsuarioInicioSesion, login_usuario, logout_usuario, AgendarAsesoria, Horarios

from Informacion_Academica.views import Buscar_Matricula, Obtener_Carreras, Obtener_Materias, Obtener_Temas, ObtenerAsesoria, Obtener_Asesorias_Pendientes, ObtenerInformacionAsesores, Obtener_Tipo_Insidencias,ObtenerTicket

from RecepcionCOBE.views import ObtenerServicios, ObtenerRegistroDiario

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', UsuarioInicioSesion, name='login'),
    path('loginUsuario', login_usuario),
    path('logout', logout_usuario),


    path('Asesorias', Home, name='Asesorias'),
    path('GenerarAsesoria', FormularioAsesoria),
    path('GenerarAsesoriaNuevoUsuario', FormularioAsesoriasNuevosAlumnos),
    path('Carreras', Obtener_Carreras),
    path('buscar/<int:matricula>', Buscar_Matricula),
    path('Materias/<str:Carrera>', Obtener_Materias),
    path('Temas/<str:materia>', Obtener_Temas),
    path('Api/ObtenerAsesoria', ObtenerAsesoria),
    path('AsesoriaGenerada', AlertaConfirmacion),
    path('ObtenerAsesoriasPendientes', Obtener_Asesorias_Pendientes),
    path('AgendarAsesoria', AgendarAsesoria),
    path('HorariosAsesores', Horarios),
    path('Api/Horarios', ObtenerInformacionAsesores),

    path('Recepcion', HomeRecepcion, name='Recepcion'),
    path('RegistroDiario', RegistroDiario),
    path('Servicios', ObtenerServicios),
    path('Api/ObtenerRegistroDiario', ObtenerRegistroDiario),
    path('Api/ObtenerTicket', ObtenerTicket),
    path('Api/ObtenerTipoInsidencias', Obtener_Tipo_Insidencias)




]
