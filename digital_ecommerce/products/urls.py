from django.urls import path
<<<<<<< HEAD
from .views import productview,productdatailview
=======
from .views import productdatailview
>>>>>>> origin/master

app_name = 'products'

urlpatterns = [
<<<<<<< HEAD
   # path('cart1', Cart3View.as_view(), name='cart1_page'),
    #path('cart3', Cart3View.as_view(), name='cart3_page'),
   # path('category', CategoryView.as_view(), name='category_page'),
    path('product', productview.as_view(), name='product_page'),
    path('<slug:slug>/',productdatailview.as_view(),name='product_dateil')
=======
    #path('cart3', Cart3View.as_view(), name='cart3_page'),
    #path('category', CategoryView.as_view(), name='category_page'),
    path('<slug:slug>/', productdatailview.as_view(), name='product_dateil'),
>>>>>>> origin/master
]