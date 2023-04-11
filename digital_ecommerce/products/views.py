from django.shortcuts import render
from django.views import View
from .models import product,Catgory,Image
from django.shortcuts import render,get_object_or_404
from django.views.generic import ListView, DetailView
from django.http import Http404
from .filters import productfilter,nameproductfilter
from django.core.paginator import Paginator
from django.urls import reverse
import itertools

'''class productview(View):
    def get(self,request,catgory_slug=None):
        products=product.objects.filter(availble=True)#اون هایی که موجود اس
        catgoris=Catgory.objects.all()
        if catgory_slug:
            catgory1=Catgory.objects.get(slug=catgory_slug)
            products=products.objects.filter(catgory=catgory1)

        return render(request,'products/category.html',{'products':products,'catgoris':catgoris}
'''
class productdatailview(View):
    template_name="products/product.html"
    def get(self,request,slug):
        image=Image.objects.all()
        products=get_object_or_404(product,slug=slug)
        context={'products': products,
                 'image':image}
        return render(request, 'products/product.html', context)

class productcategory(View):
    template_name = "products/category.html"
    def get(self,request):
        products =product.objects.all()
        image=Image.objects.all()
        if 'price_min' in request.GET:
            price_min = request.GET['price_min']
            products = products.filter(price__gte=price_min)

        if 'price_max' in request.GET:
            price_max = request.GET['price_max']
            products = products.filter(price__lte=price_max)

        if 'name' in request.GET:
            name = request.GET['name']
            products = products.filter(name=name)
        if 'filter' in request.GET and request.GET['filter'] == 'cheapest':
            products = product.objects.order_by('price')


        if 'filter' in request.GET and request.GET['filter'] == 'priceg':
            products = product.objects.order_by('-price')

        if 'filter' in request.GET and request.GET['filter'] == 'created':
            products = product.objects.order_by('-crated')


        context = {
            "object_list": products,
            "image":image,
        }

        return render(request,self.template_name , context)
