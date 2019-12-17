from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import *

class GoodsViewSet(generics.ListAPIView):
    queryset = Goods.objects.all()
    serializer_class = GoodsSerializer


class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
