from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class ProgramaAcademico(models.Model):
    id_Carrera = models.BigAutoField(primary_key=True)
    Nombre = models.CharField(max_length=500)

    def __str__(self):
        return self.Nombre


class Materia(models.Model):
    id_Materia = models.BigAutoField(primary_key=True)
    Nombre = models.CharField(max_length=100)
    Carrera = models.ManyToManyField(ProgramaAcademico)

    def __str__(self):
        return self.Nombre


class Tema(models.Model):
    id_Tema = models.BigAutoField(primary_key=True)
    Nombre = models.TextField()
    Materias = models.ManyToManyField(Materia)

    def __str__(self):
        return self.Nombre


class Alumno(models.Model):
    Matricula = models.CharField(max_length=6, primary_key=True)
    Nombre_Alumno = models.CharField(max_length=500)
    Nacionalidad = models.CharField(max_length=15)
    Sexo = models.CharField(max_length=1)
    Carrera = models.ForeignKey(ProgramaAcademico, on_delete=models.CASCADE)

    def __str__(self):
        return self.Matricula



class Rango(models.Model):
    id_Rango = models.BigAutoField(primary_key=True)
    Rango = models.CharField(max_length=100)

    def __str__(self):
        return self.Rango


class Personal(models.Model):
    id_Personal = models.BigAutoField(primary_key=True)
    Matricula = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    Imagen = models.ImageField(
        upload_to='profile_pictures/', blank=True, null=True)
    Rol = models.ForeignKey(Rango, on_delete=models.CASCADE)
    Usuario = models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
    Horario = models.TextField(default="lunes")
    Huella = models.CharField(max_length=50,blank=True,null=True)

    def __str__(self):
        return self.Matricula.Nombre_Alumno
    
class AsesorAcademico(models.Model):
    id_Asesor = models.BigAutoField(primary_key=True)
    Personal = models.ForeignKey(Personal, on_delete=models.CASCADE)
    Materias = models.TextField()

    def __str__(self):
        return self.Personal.Matricula.Nombre_Alumno

class AsesorPsicologico(models.Model):
    id_Asesor = models.BigAutoField(primary_key=True)
    Personal = models.ForeignKey(Personal, on_delete=models.CASCADE)

    def __str__(self):
        return self.Personal.Matricula.Nombre_Alumno

class EstatusAsesoria(models.Model):
    id_Estatus = models.BigAutoField(primary_key=True)
    Estatus = models.CharField(max_length=50)
    
    def __str__(self):
        return self.Estatus


class AsesoriaAcademica(models.Model):

    id_Asesoria = models.BigAutoField(primary_key=True)
    Matricula = models.CharField(max_length=6)
    Nombre_Alumno = models.CharField(max_length=500)
    Telefono = models.CharField(max_length=10)
    Correo = models.CharField(max_length=24)
    Semestre = models.CharField(max_length=2)
    NumMaterias = models.CharField(max_length=2)
    Carrera = models.CharField(max_length=500)
    Materia = models.CharField(max_length=100)
    Reprobadas = models.CharField(max_length=2)
    Tema = models.TextField()
    Horario = models.TextField()
    Comentario = models.TextField()
    Asesor = models.ForeignKey(AsesorAcademico, on_delete = models.CASCADE,blank=True,null=True)
    Estatus = models.ForeignKey(EstatusAsesoria,on_delete=models.CASCADE)
    Asistencia = models.BooleanField(default=False)

    def __str__(self):
        return self.Matricula

class AsesoriaPsicologica(models.Model):
    id_Asesoria = models.BigAutoField(primary_key=True)
    Matricula = models.CharField(max_length=6)
    Telefono = models.CharField(max_length=10)
    Asesor = models.ForeignKey(AsesorPsicologico, on_delete = models.CASCADE,blank=True,null=True)
    Asistencia = models.BooleanField(default=False)

    def __str__(self):
        return self.Matricula


class Tipo_Insidencia(models.Model):
    id_insidencia = models.BigAutoField(primary_key=True)
    Tipo = models.CharField(max_length=250)

    def __str__(self):
        return self.Tipo


class Ticket(models.Model):
    id_Ticket = models.BigAutoField(primary_key=True)
    asunto = models.ForeignKey(Tipo_Insidencia, on_delete=models.CASCADE)
    descripcion = models.TextField()
    Estatus = models.CharField(max_length=100)

class Nota(models.Model):
    id_nota = models.BigAutoField(primary_key=True)
    nivel = models.CharField(max_length = 50)
    descripcion = models.TextField()
    Titulo = models.CharField(max_length=19)


