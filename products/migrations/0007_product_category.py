# Generated by Django 3.0.7 on 2020-07-27 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20200727_2141'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
    ]
