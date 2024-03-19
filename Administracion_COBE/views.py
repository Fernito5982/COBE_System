from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from Informacion_Academica.models import Personal
from Informacion_Academica.views import ObtenerInformacionAsesores


@login_required
def Home(request):
    return render(request, 'home/dashboard.html')

@login_required
def FormularioAsesoria(request):
    return render(request, 'FormularioAsesoria/formulario.asesoria.html')


@login_required
def FormularioAsesoriasNuevosAlumnos(request):
    return render(request, 'FormularioAsesoria/formulario.asesoria.Nuevo.html')


@login_required
def AlertaConfirmacion(request):
    return render(request, 'alerta.confirmacion.html')


@login_required
def HomeRecepcion(request):
    InformacionUsuario()
    return render(request, 'home_recepcion/index.html')


@login_required
def RegistroDiario(request):
    return render(request, 'home_recepcion/formulario.registroDiario.html')


@login_required
def AgendarAsesoria(request):
    return render(request, 'AgendarCita/main_panel.html')


@login_required
def Horarios(request):
    return render(request, 'HorariosAsesores/horarios.html')

# Funciones de Login


def UsuarioInicioSesion(request):
    return render(request, 'Login.html')


def login_usuario(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('Recepcion')
        else:
            return render(request, 'Login.html', {'error_message': 'Invalid login'})
    else:
        return redirect('login')


@login_required
def logout_usuario(request):
    logout(request)
    return redirect('login')


def InformacionUsuario():
    personal_obj = Personal.objects.get(pk=1)
    usuario = personal_obj.Usuario
    username = usuario.first_name

    informacion_personal = personal_obj.Matricula
    Matricula = informacion_personal.Matricula
