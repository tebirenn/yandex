from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import User 
from .serializers import *


@api_view(['GET'])
def users_list(request):

    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        users = User.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(users, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = UserSerializer(data,context={'request': request} ,many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()
        
        return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/users/?page=' + str(nextPage), 'prevlink': '/api/users/?page=' + str(previousPage)})

@api_view(['GET', 'PUT', 'DELETE'])
def users_detail(request, user_id):
    """
 Retrieve, update or delete a user by id/pk.
 """
    try:
        user = User.objects.get(user_id=user_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def checkUser(request):

    data = request.data
    login = data["login"]
    password = data["password"]

    try:
        user = User.objects.get(login=login, password=password)
    except:
        return Response({"error": "error"})
        
    if request.method == 'POST':    
        serializer = UserSerializer(user,context={'request': request})
        return Response(serializer.data)

@api_view(['POST'])  
def regUser(request):

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status":"created"})
        return Response({"status":"error"})

@api_view(['POST'])  
def changeSub(request):

    if request.method == "POST":
        user_id = request.data["user_id"]
        
        try: 
            user = User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            return Response({"error": "No Such User"})

        user.sub_plus = True
        user.save()
        return Response({"status":"updated"})
