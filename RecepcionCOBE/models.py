from django.db import models

# Create your models here.


class Servicio(models.Model):
    id_Servicio = models.BigAutoField(primary_key=True)
    Servicio = models.CharField(max_length=100)

    def __str__(self):
        return self.Servicio


class RegistroDiario(models.Model):
    id_Registro = models.BigAutoField(primary_key=True)
    Alumno = models.CharField(max_length=500)
    Matricula = models.CharField(max_length=6)
    Sexo = models.CharField(max_length=1)
    Carrera = models.CharField(max_length=500)
    Correo = models.CharField(max_length=100)
    Telefono = models.CharField(max_length=10)
    Servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    Fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Matricula
