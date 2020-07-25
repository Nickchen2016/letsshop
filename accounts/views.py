from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from letsshop import views as root


# Create your views here.
def signup_view(req):
    if req.method == 'POST':
        form = UserCreationForm(req.POST)
        if form.is_valid():
            # log the user in
            user = form.save()
            login(req, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(req, 'accounts/signup.html', {'form': form})


def login_view(req):
    if req.method == 'POST':
        form = AuthenticationForm(data=req.POST)
        if form.is_valid():
            # log the user in
            user = form.get_user()
            login(req, user)
            if 'next' in req.POST:
                return redirect(req.POST.get('next'))
            else:
                return redirect('home')
    else:
        form = AuthenticationForm()
    return render(req, 'accounts/login.html', {'form': form})
    # When we load the form/page its GET req while we sub the form, its POST


def logout_view(req):
    if req.method == 'POST':
        logout(req)
        return redirect('home')