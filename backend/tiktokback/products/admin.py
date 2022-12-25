from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list = ('product_name', 'category', 'image_url', 'description', 'about', 'characteristics', 'price', 'created_at')

admin.site.register(Product, ProductAdmin)