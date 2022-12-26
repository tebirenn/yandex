from django.db import models

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    image_url = models.CharField(max_length=255)
    product_description = models.CharField(max_length=500)
    about = models.CharField(max_length=500)
    characteristics = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=15, decimal_places=2,)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name