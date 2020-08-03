# from django.contrib.auth.models import User, Grosup
from products.models import Product, Image
from orders.models import Order, OrderProduct
from rest_framework import serializers

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'discount', 'date', 'avaliable', 'category']

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'product_id']

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user_id', 'date']

class OrderProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ['id', 'order_id', 'product_id', 'size', 'quantity', 'subtotal']