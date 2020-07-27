from django.shortcuts import render
from .models import Product, Image

# Create your views here.
def product_list(req):
    products = Product.objects.all().order_by('date')
    images = Image.objects.all()
    return render(req, 'products/product_list.html', {'products': products, 'images': images})