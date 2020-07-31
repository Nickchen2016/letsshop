# from django.contrib.auth.models import User, Grosup
from products.models import Product, Image
from rest_framework import serializers

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'discount', 'date', 'avaliable', 'category']

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'product_id']