# Generated by Django 4.1.4 on 2022-12-28 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0006_rename_user_favorites_user_user_basket"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="user_basket",
            field=models.CharField(blank=True, default="", max_length=5000),
        ),
    ]
