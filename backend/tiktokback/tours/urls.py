from django.urls import path, include, re_path
from .views import *                           


urlpatterns = [           
    re_path(r'^$', tours_list),
    re_path(r'^(?P<pk>\d+)/$', tour_detail)
]