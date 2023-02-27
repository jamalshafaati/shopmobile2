from django.shortcuts import render
from django.views import View
from .models import product,Catgory,Image
from django.shortcuts import render,get_object_or_404
from django.views.generic import ListView, DetailView
from django.http import Http404
from .filters import productfilter,renage_filter



'''class productview(View):
    def get(self,request,catgory_slug=None):
        products=product.objects.filter(availble=True)#اون هایی که موجود اس
        catgoris=Catgory.objects.all()
        if catgory_slug:
            catgory1=Catgory.objects.get(slug=catgory_slug)
            products=products.objects.filter(catgory=catgory1)

        return render(request,'products/category.html',{'products':products,'catgoris':catgoris})
class productdatailview(View):
    def get(self,request,slug):
        products=get_object_or_404(product,slug=slug)
        return render(request,'products/product.html',{'product':products})
'''
class ProductListView(ListView):
    template_name = "products/category.html"


    # def get_context_data(self, *args, object_list=None, **kwargs):
    #     context = super(ProductListView, self).get_context_data(*args, **kwargs)
    #     print(context)
    #     return context

    def get_queryset(self):
        return product.objects.all()

def product_list_view(request):
    products = product.objects.all()
    image=Image.objects.all()
    ob_filter=productfilter(request.GET,queryset=products)
    products=ob_filter.qs
    f1 = renage_filter({'price_min': '11'}, queryset=products)
    # Max-Only: Books costing less than 19€
    f2 = renage_filter({'price_max': '19'}, queryset=products)

    context = {
        "object_list": products,
        "image":image,
        "filters":ob_filter,
        "f1":f1,
        "f2":f2,

    }
    return render(request, "products/category.html", context)
def productless(request):
    return render(request, "products/less.html", )

