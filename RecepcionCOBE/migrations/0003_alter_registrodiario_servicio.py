# Generated by Django 5.0 on 2024-02-01 21:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecepcionCOBE', '0002_registrodiario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registrodiario',
            name='Servicio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RecepcionCOBE.servicio'),
        ),
    ]
