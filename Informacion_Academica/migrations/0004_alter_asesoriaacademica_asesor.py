# Generated by Django 5.0 on 2024-04-02 23:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Informacion_Academica', '0003_alter_asesoriapsicologica_asesor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asesoriaacademica',
            name='Asesor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Informacion_Academica.asesoracademico'),
        ),
    ]