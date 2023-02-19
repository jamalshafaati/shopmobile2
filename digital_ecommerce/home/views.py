from django.shortcuts import render, redirect
from django.views import View

# Create your views here.
def indexconnectview(request):
    return render(request, 'home/index.html')


def msgconnetcview(request):
    return render(request, 'home/msg.html')


def cart1connectview(request):
    return render(request, 'products/cart1.html')


def cart3connectview(request):
    return render(request, 'products/cart3.html')


def categoryconnectview(request):
    return render(request, 'products/category.html')


def productconnectview(request):
    return render(request, 'products/product.html')


def loginconnectview(request):
    return render(request, 'accounts/login.html')


def passwordresetconnectview(request):
    return render(request, 'accounts/password-reset.html')


def registerconnectview(request):
    return render(request, 'accounts/register.html')


