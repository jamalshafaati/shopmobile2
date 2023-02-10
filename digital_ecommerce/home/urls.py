from django.urls import path
from home.views import *

app_name = 'home'

urlpatterns = [
    path('index_page/', indexconnectview, name='index_page'),
    path('msg_page/', msgconnetcview, name='msg_page'),
]
