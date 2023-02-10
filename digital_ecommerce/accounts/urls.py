from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login_page'),
    path('register/', UserRegisterView.as_view(), name='register_page'),
    path('logout/', UserLogoutView.as_view(), name='logout_page'),
    path('reset/', UserPasswordResetView.as_view(), name='password_reset'),
    path('reset/done/', UserPasswordResetDoneView.as_view(), name='password_reset_done'),
    path('confirm/<uidb64>/<token>/', UserPasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('confirm/complete/', UserPasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('activate/<uidb64>/<token>/', ActivateAccount.as_view(), name='activate'),
]
