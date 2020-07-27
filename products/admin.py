from django.contrib import admin
from .models import Product, Size, Image


class ProductImagesInline(admin.StackedInline):
    model = Image

class ProductAdmin(admin.ModelAdmin): # Able to add multiple images in single product section
    inlines = [ProductImagesInline]

# Register your models here.
admin.site.register(Product, ProductAdmin)
admin.site.register(Size)
admin.site.register(Image)
