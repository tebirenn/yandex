from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list = ('login', 'password', 'name', 'surname', 'email', 'phone_number', 'sub_plus', 'user_buylist')

admin.site.register(User, UserAdmin)