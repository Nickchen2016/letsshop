from django.shortcuts import render
from products.models import Product, Image
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProductSerializer, ImageSerializer

# def showheader(req):
#     return render(req, 'header.html')

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('date')
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.IsAuthenticated]