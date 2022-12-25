from django.contrib import admin
from django.urls import path, include, re_path
from users import urls                           


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/products/', include('products.urls')),           
]