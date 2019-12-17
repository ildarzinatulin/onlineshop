from rest_framework import serializers
from goods.models import Goods
from orders.models import Order


class GoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goods
        fields = [
            'id',
            'name',
            'img',
            'price',
        ]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
