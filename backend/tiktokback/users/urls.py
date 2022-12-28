from django.urls import path, include, re_path
from .views import *                           


urlpatterns = [           
    re_path(r'^$', users_list),
	re_path(r'^(?P<user_id>\d+)/$', users_detail),
    re_path('login', checkUser),
    re_path('register', regUser),
    re_path('changeSub', changeSub)
]

