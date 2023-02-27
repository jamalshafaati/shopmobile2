from django.urls import path
from .views import ProductListView,product_list_view,productless
from .models import product
from django_filters.views import FilterView,object_filter


app_name = 'products'

urlpatterns = [
    #path('<slug:slug>/',productdatailview.as_view(),name='product_dateil'),
    #path('catgory/<slug:catgory_slug>/',productview.as_view(),name='cattgory_slugg'),
    #ath('product', productview.as_view(), name='product_dateil'),
    #path('product', productdatailview.as_view(), name='product_dateil'),
    #path('products', ProductListView.as_view()),
    path('products', product_list_view),
    path("products/", FilterView.as_view(model=product), name="product-list"),

]