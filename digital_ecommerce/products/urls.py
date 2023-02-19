from django.urls import path
from .views import (ProductListView,product_list_view)


app_name = 'products'

urlpatterns = [
    #path('<slug:slug>/',productdatailview.as_view(),name='product_dateil'),
    #path('catgory/<slug:catgory_slug>/',productview.as_view(),name='cattgory_slugg'),
    #ath('product', productview.as_view(), name='product_dateil'),
    #path('product', productdatailview.as_view(), name='product_dateil'),
    path('products', ProductListView.as_view()),
    path('products-fbv', product_list_view),

]