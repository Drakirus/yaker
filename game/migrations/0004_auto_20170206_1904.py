# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-06 19:04
from __future__ import unicode_literals

from django.db import migrations, models
import game.models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_auto_20170206_1635'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='game_set',
            field=models.CharField(default=game.models.create_game_set, max_length=100),
        ),
    ]
