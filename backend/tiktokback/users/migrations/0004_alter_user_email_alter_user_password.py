# Generated by Django 4.1.4 on 2022-12-25 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_user_phone_number"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name="user", name="password", field=models.CharField(max_length=255),
        ),
    ]