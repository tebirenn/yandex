from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Tour 
from users.models import User
from .serializers import *
from users.serializers import UserSerializer

@api_view(['GET'])
def tours_list(request):

    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        tours = Tour.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(tours, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = TourSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        
        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/tours/?page=' + str(nextPage), 'prevlink': '/api/tours/?page=' + str(previousPage)})

@api_view(['GET'])
def tour_detail(request, pk):

    tour_id = pk

    try:
        tour = Tour.objects.get(tourID=tour_id)
    except Tour.DoesNotExist:
        return Response({"error:error"})

    if request.method == 'GET':
        serializer = TourSerializer(tour,context={'request': request})
        return Response(serializer.data)
