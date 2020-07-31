from django.shortcuts import render
from .models import Product, Image, Size

# Create your views here.
def product_list(req):
    products = Product.objects.all().order_by('date')
    return render(req, 'products/product_list.html', {'products': products})

def product_detail(req, slug):
    product = Product.objects.get(slug=slug)
    images = Image.objects.all().filter(product__slug=slug)
    sizes = Size.objects.all().filter(product__slug=slug)
    return render(req, 'products/product_detail.html', {'product': product, 'images': images, 'sizes': sizes})