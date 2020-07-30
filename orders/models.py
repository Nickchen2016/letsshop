from django.db import models
from django.contrib.auth.models import User
from products.models import Product

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    date = models.DateTimeField(auto_now_add=True)   

    def __str__(self):
        return '%s ordered on -> %s' % (self.user,self.date)

class OrderProduct(models.Model):      
    order = models.ForeignKey(Order, on_delete=models.CASCADE, default=None)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)
    size = models.CharField(max_length=16)
    quantity = models.IntegerField()
    subtotal = models.IntegerField()

    def __str__(self):
        return 'Order number: %s Subtotal: $%s' % (self.order.id,self.subtotal)