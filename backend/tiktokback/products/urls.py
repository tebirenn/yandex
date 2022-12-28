from django.urls import path, include, re_path
from .views import *                           


urlpatterns = [           
    re_path(r'^$', products_list),
    # re_path('detail', product_detail),
    re_path(r'^(?P<pk>\d+)/$', product_detail),
    re_path('category',get_products_by_category),
    re_path('addbuylist', add_product_to_buylist),
]



