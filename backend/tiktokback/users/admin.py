from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
  list = ('login', 'password', 'name', 'surname', 'email', 'sub_plus')

admin.site.register(User, UserAdmin)