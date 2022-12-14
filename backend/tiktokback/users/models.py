from django.db import models
from products.models import Product

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=50)
    user_buylist = models.ManyToManyField(Product, blank = True, related_name='user_buylist')
    sub_plus = models.BooleanField(default=False)

    def __str__(self):
        return self.name