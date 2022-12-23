from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'