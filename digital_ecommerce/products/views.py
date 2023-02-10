from django.shortcuts import render
from django.views import View


# Create your views here.

class Cart1View(View):
    def get(self, request):
        return render(request, 'products/cart1.html')

    def post(self, request):
        pass


class Cart3View(View):
    def get(self, request):
        return render(request, 'products/cart3.html')

    def post(self, request):
        pass


class CategoryView(View):
    def get(self, request):
        return render(request, 'products/category.html')

    def post(self, request):
        pass


class ProducView(View):
    def get(self, request):
        return render(request, 'products/product.html')

    def post(self, request):
        pass
