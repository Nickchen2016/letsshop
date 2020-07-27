from django.shortcuts import render
from .models import Product

# Create your views here.
def product_list(req):
    products = Product.objects.all().order_by('date')
    return render(req, 'products/product_list.html', {'products': products})