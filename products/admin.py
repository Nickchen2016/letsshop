from django.contrib import admin
from .models import Product, Size, Images


class ProductImagesInline(admin.TabularInline):
    model = Images

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImagesInline]

# Register your models here.
admin.site.register(Product, ProductAdmin)
admin.site.register(Size)
admin.site.register(Images)
