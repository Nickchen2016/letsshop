from django.shortcuts import render
from .models import Order, OrderProduct
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required(login_url="/accounts/login/")
def order_hist(req):
    order = Order.objects.all().filter(user_id=req.user.id)
    orderproduct = OrderProduct.objects.all().filter(order__user_id=req.user.id)
    return render(req, 'orders/cart_hist.html')