from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Product 
from .serializers import *


@api_view(['GET'])
def products_list(request):

    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        products = Product.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(products, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = ProductSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        
        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/users/?page=' + str(nextPage), 'prevlink': '/api/users/?page=' + str(previousPage)})

@api_view(['GET'])
def product_detail(request,pk):

    product_id = pk

    try:
        product = Product.objects.get(product_id=product_id)
    except Product.DoesNotExist:
        return Response({"error:error"})

    if request.method == 'GET':
        serializer = ProductSerializer(product,context={'request': request})
        return Response(serializer.data)

@api_view(['POST'])
def get_products_by_category(request):

    data = request.data
    category = data["category"].lower()
    items = []

    try:
        products = Product.objects.all()
    except Product.DoesNotExist:
        return Response({"No such products"})
    
    if request.method == 'POST':
        
        for i in range(0,len(products)):
            if products[i].category == category:
                serializer = ProductSerializer(products[i],context={'request': request})
                items.append(serializer.data)

    return Response(items)

