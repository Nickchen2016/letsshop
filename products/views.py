from django.shortcuts import render
from .modles import Product

# Create your views here.
def product_list(req):
    products = Product.objects.all().order_by('date')
    return render(req, 'product/product_list.html', {'products': products})