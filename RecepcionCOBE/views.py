from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from RecepcionCOBE.models import Servicio, RegistroDiario
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

def ObtenerServicios(request):
    try:
        servicios = Servicio.objects.all()
        servicios_serialized = list(servicios.values())

        info = {
            "message": "Success",
            "Servicio": servicios_serialized
        }
    except Servicio.DoesNotExist:
        info = {
            "message": "Not Found"
        }
    return JsonResponse(info)


@csrf_exempt
def ObtenerRegistroDiario(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Formato JSON no válido'}, status=400)

        # Manipulamos el JSON de la Asesoria
        AlmacenarRegistroDB(data)
        print(f"Informacion: {AlmacenarRegistroDB}")
        return JsonResponse({'message': 'Success'})
    else:
        return JsonResponse({'message': 'error'}, status=405)


def AlmacenarRegistroDB(Registro):

    servicio_id = int(Registro['Servicio'])
    servicio_instancia = Servicio.objects.get(id_Servicio=servicio_id)

    registroDB = RegistroDiario(
        Matricula=Registro['Matricula'],
        Alumno=Registro['Nombre'],
        Telefono=Registro['Telefono'],
        Sexo=Registro['Sexo'],
        Servicio=servicio_instancia,
        Carrera=Registro['Carrera'],
        Correo=Registro['Correo'],

    )

    registroDB.save()
