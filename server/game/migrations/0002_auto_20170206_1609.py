# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-06 16:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='save',
            name='game_board',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AlterField(
            model_name='game',
            name='game_set',
            field=models.CharField(default='', max_length=25),
        ),
    ]
