from django.contrib import admin
from django.urls import path, include
from .views import TestView

urlpatterns = [
    path("test/", TestView.as_view())
]