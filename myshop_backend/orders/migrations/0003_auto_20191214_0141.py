# Generated by Django 3.0 on 2019-12-13 22:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20191214_0140'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='user',
            new_name='userId',
        ),
    ]
