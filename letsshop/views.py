from django.shortcuts import render

def homepage(req):
    return render(req, 'index.html')

def login(req):
    return render(req,'login.html')