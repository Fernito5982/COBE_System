from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json


from Informacion_Academica.models import Alumno, ProgramaAcademico, Materia, AsesoriaAcademica, Personal, AsesorAcademico, Tipo_Insidencia, Ticket

# Funciones Asesorias Academicas


def Buscar_Matricula(request, matricula):

    try:
        alumno = Alumno.objects.get(Matricula=matricula)

        info = {
            "message": "Success",
            "Matricula": alumno.Matricula,
            "Nombre": alumno.Nombre_Alumno,
            "Sexo": alumno.Sexo,
            "Carrera": alumno.Carrera.Nombre,
        }
    except Alumno.DoesNotExist:
        info = {
            "message": "Not Found"
        }
    return JsonResponse(info)


def Obtener_Carreras(request):
    try:
        carreras = ProgramaAcademico.objects.all()
        carreras_serialized = list(carreras.values())
        info = {
            "message": "Success",
            "Carreras": carreras_serialized,
        }

    except:
        info = {
            "message": "Not Found"
        }

    return JsonResponse(info)


def Obtener_Asesorias_Pendientes(request):
    try:
        asesorias = AsesoriaAcademica.objects.all()
        asesorias_serializada = list(asesorias.values())
        info = {
            "message": "Success",
            "Asesorias": asesorias_serializada,
        }

    except:
        info = {
            "message": "Not Found"
        }

    return JsonResponse(info)


def Obtener_Materias(request, Carrera):

    Carrera = Carrera.replace('_', ' ')

    try:
        materias = get_object_or_404(ProgramaAcademico, Nombre=Carrera)
        materias_de_carrera = materias.materia_set.all()
        materias_serializadas = list(materias_de_carrera.values())

        info = {
            "message": "Success",
            "materias": materias_serializadas,
        }

    except:
        info = {
            "message": "Not Found",
        }

    return JsonResponse(info)


def Obtener_Temas(request, materia):

    materia = materia.replace('_', ' ')

    try:
        temas = get_object_or_404(Materia, Nombre=materia)
        temas_de_materia = temas.tema_set.all()
        temas_serializadas = list(temas_de_materia.values())

        info = {
            "message": "Success",
            "temas": temas_serializadas,
        }

    except:
        info = {
            "message": "Not Found",
        }

    return JsonResponse(info)


@csrf_exempt
def ObtenerAsesoria(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Formato JSON no válido'}, status=400)

        # Manipulamos el JSON de la Asesoria
        AlmacenarAsesoriaDB(data)
        print(f"Hola Mundo {AlmacenarAsesoriaDB}")
        return JsonResponse({'message': 'Success'})
    else:
        return JsonResponse({'message': 'error'}, status=405)


def AlmacenarAsesoriaDB(Asesoria):
    asesoriaDB = AsesoriaAcademica(
        Matricula=Asesoria['Matricula'],
        Nombre_Alumno=Asesoria['Nombre'],
        Telefono=Asesoria['Telefono'],
        Correo=Asesoria['Correo'],
        Semestre=Asesoria['Semestre'],
        NumMaterias=Asesoria['NumMaterias'],
        Carrera=Asesoria['Carrera'],
        Materia=Asesoria['Materia'],
        Reprobadas=Asesoria['Reprobada'],
        Tema=Asesoria['Tema'],
        Horario=Asesoria['Horario'],
        Comentario=Asesoria['Comentario'],
        Asesor=Asesoria['Asesor'],
        Estatus=Asesoria['Estatus'],
    )

    asesoriaDB.save()


def ObtenerInformacionAsesores(request):

    # Lista de diccionarios de asesores
    asesores_lista = []

    try:
        # Obtener listado asesores
        asesores = AsesorAcademico.objects.all()

        # Recorremos el listado de asesores
        for asesor in asesores:
            # Informacion Asesor
            info_asesor = {
                "Nombre": "",
                "Imagen": "",
                "Materias": "",
                "Horarios": "",
                "Carrera": ""
            }

            # Rellanamos el diccionario
            info_asesor["Materias"] = asesor.Materias
            info_asesor["Horarios"] = asesor.Horarios
            info_asesor["Imagen"] = asesor.Personal.Imagen.url

            # Buscamos la informacion faltante en otras tablas
            info = Alumno.objects.get(
                Matricula=asesor.Personal.Matricula)

            nombre = info.Nombre_Alumno
            carrera = info.Carrera.Nombre

            # Completar informacion
            info_asesor["Nombre"] = nombre
            info_asesor["Carrera"] = carrera

            asesores_lista.append(info_asesor)

        info = {
            "message": "Success",
            "asesores_informacion": asesores_lista,
        }

    except:
        info = {
            "message": "Not Found",
        }

    return JsonResponse(info)


def Obtener_Tipo_Insidencias(request):
    insidencias = Tipo_Insidencia.objects.all()
    try:
        insidencias = Tipo_Insidencia.objects.all()
        insidencias_serializadas = list(insidencias.values())

        info = {
            "message": "Success",
            "insidencias": insidencias_serializadas,
        }

    except:
        info = {
            "message": "Not Found",
        }

    return JsonResponse(info)
