from django.urls import path, include, re_path
from .views import *                           


urlpatterns = [           
    re_path(r'^$', users_list),
	re_path(r'^(?P<user_id>\d+)/$', users_detail),
]

