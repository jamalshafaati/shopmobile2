from django.urls import path
from .views import productdatailview

app_name = 'products'

urlpatterns = [
    #path('cart3', Cart3View.as_view(), name='cart3_page'),
    #path('category', CategoryView.as_view(), name='category_page'),
    path('<slug:slug>/', productdatailview.as_view(), name='product_dateil'),
]