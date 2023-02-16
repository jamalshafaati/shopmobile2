from django.shortcuts import render
from django.views import View
from django.shortcuts import render,get_object_or_404
from.models import product,Catgory

# Create your views here.

# Create your views here.
class productview(View):
    def get(self,request,catgory_slug=None):
        product1=product.objects.filter(availble=True)#اون هایی که موجود اس
        #catgoris=Catgory.objects.all()
        '''if catgory_slug:
            catgory1=Catgory.objects.get(slug=catgory_slug)
            product1=product.objects.filter(catgory=catgory1)'''

        return render(request,'index.html',{'product':product1,})
class productdatailview(View):
    def get(self,request,slug):
        product1=get_object_or_404(product,slug=slug)
        return render(request,'products/product.html',{'product':product1})