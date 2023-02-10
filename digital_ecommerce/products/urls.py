from django.urls import path
from .views import *

app_name = 'products'

urlpatterns = [
    path('cart1', Cart3View.as_view(), name='cart1_page'),
    path('cart3', Cart3View.as_view(), name='cart3_page'),
    path('category', CategoryView.as_view(), name='category_page'),
    path('product', ProducView.as_view(), name='product_page'),
]