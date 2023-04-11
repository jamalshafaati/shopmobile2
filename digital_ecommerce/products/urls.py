from django.urls import path
from .views import productcategory,productdatailview
from .models import product
from django_filters.views import FilterView
from .filters import productfilter


app_name = 'products'

urlpatterns = [
    #path('<slug:slug>/',productdatailview.as_view(),name='product_dateil'),
    #path('catgory/<slug:catgory_slug>/',productview.as_view(),name='cattgory_slugg'),
    #ath('product', productview.as_view(), name='product_dateil'),
    #path('product', productdatailview.as_view(), name='product_dateil'),
    #path('products', ProductListView.as_view()),
    #path("products/<int:pk>/", product_list_view,name=' product_list_view'),
    path("products/", productcategory.as_view(),name='products'),
    path('products/<int:pk>/', productcategory.as_view(), name='post_detail'),
    #path("products/", FilterView.as_view(model=product), name="product-list"),
    #path('products/<productId>/<name>', product_detail),
    path('<slug:slug>/', productdatailview.as_view(), name='product_dateil'),

]