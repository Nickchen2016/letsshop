from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('history/', views.order_hist, name='hist'),
    path('cart/', views.order_cart, name='cart')
]