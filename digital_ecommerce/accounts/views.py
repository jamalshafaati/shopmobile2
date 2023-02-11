from django.shortcuts import render, redirect
from django.views import View
from .models import User
from .forms import RegisterForm, LoginForm, PasswordResetForm,PasswordResetConfirmForm
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import views as auth_views
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import login
from django.conf import settings
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.contrib.auth.tokens import default_token_generator
from .tokens import account_activation_token
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str

# Create your views here.

class UserLoginView(View):
    form_class = LoginForm
    template_name = 'accounts/login.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            messages.error(request, 'you already logged in', 'warning')
            return redirect('home:index_page')
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        form = self.form_class
        return render(request, 'accounts/login.html', {'form': form})

    def post(self, request):
        if request.method == 'POST':
            form = self.form_class(request.POST)
            if form.is_valid():
                cd = form.cleaned_data
                user = authenticate(request, email=cd['email'], password=cd['password'])
                if user is not None:
                    if user.is_active:
                        login(request, user)
                        messages.success(request, 'احراز هویت با موفقیت انجام شد', 'success')
                        return redirect('home:index_page')
                    else:
                        return messages.error(request, 'حساب غیرفعال است', 'warning')
                else:
                    messages.error(request, 'کاربری با این اطلاعات وجود ندارد', 'warning')
        else:
            form = LoginForm()
        return render(request, 'accounts/login.html', {'form': form})


class UserRegisterView(View):
    form_class = RegisterForm
    template_name = 'accounts/register.html'

    '''def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            messages.error(request, 'you already logged in', 'warning')
            return redirect('home:index_page')
        return super().dispatch(request, *args, **kwargs)'''

    def get(self, request):
        form = self.form_class
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False  # Deactivate account till it is confirmed
            user.save()
            email_send=form.cleaned_data.get('email')

            current_site = get_current_site(request)
            subject = 'Activate Your MySite Account'
            message = render_to_string('accounts/template_activate_account.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
                'protocol': 'https' if request.is_secure() else 'http',
            },)
            send_mail(subject, message,settings.EMAIL_HOST_USER,[email_send], fail_silently=False)


            messages.success(request, ('Please Confirm your email to complete registration.'))

           # return redirect('accounts:login')

        return render(request, self.template_name, {'form': form})
class ActivateAccount(View):

    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and account_activation_token.check_token(user, token):
            user.is_active = True
            user.profile.email_confirmed = True
            user.save()
            login(request, user)
            messages.success(request, ('Your account have been confirmed.'))
            return redirect('home:index_page')
        else:
            messages.warning(request, ('The confirmation link was invalid, possibly because it has already been used.'))
            return redirect('home:index_page')

class UserLogoutView(LoginRequiredMixin, View):
    def get(self, request):
        logout(request)
        messages.success(request, 'logout was successfully', 'success')
        return redirect('home:index_page')


class UserPasswordResetView(View):
    form_class = PasswordResetForm

    def get(self, request):
        form = self.form_class
        return render(request, 'accounts/password-reset.html', {'form': form})

    def post(self, request):
        form = self.form_class
        if request.method == "POST":
            password_reset_form = form(request.POST)
            if password_reset_form.is_valid():
                data = password_reset_form.cleaned_data['email']
                associated_users = User.objects.filter(
                    Q(email=data))  # <QuerySet [<User: amirmohamadzade123@gmail.com>]>
                if associated_users.exists():
                    for user in associated_users:
                        subject = "Password Reset Requested"
                        email_template_name = "accounts/password_reset_email.html"

                        c = {
                            "email": 'digitalecommercewebsite@gmail.com',
                            'domain': 'localhost:8000',
                            'site_name': 'Website',
                            "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                            "user": user,
                            'token': default_token_generator.make_token(user),
                            'protocol': 'http',
                        }
                        email = render_to_string(email_template_name, c)
                        try:
                            send_mail(subject, email, 'admin@example.com', [user.email], fail_silently=False)
                        except BadHeaderError:
                            return HttpResponse('Invalid header found.')
                        return redirect("accounts:password_reset_done")
        password_reset_form = form()
        return render(request=request, template_name="accounts/password-reset.html",
                      context={"form": password_reset_form})


class UserPasswordResetDoneView(auth_views.PasswordResetDoneView):
    template_name = 'accounts/password_reset_done.html'


class UserPasswordResetConfirmView(View):
    form_class = PasswordResetConfirmForm

    def get(self, request, uidb64, token, *args, **kwargs):
        form = self.form_class
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if default_token_generator.check_token(user, token) == True:
            return render(request, 'accounts/password_reset_confirm.html', {'form': form})


        else:
            pass

    def post(self, request, uidb64, token):
        form = self.form_class(request.POST)
        if form.is_valid():
            if form.cleaned_data['password'] == form.cleaned_data['confirm_password']:
                uid = force_str(urlsafe_base64_decode(uidb64))
                user = User.objects.get(pk=uid)
                user.set_password(form.cleaned_data['password'])
                user.save()
                login(request, user)
                return redirect('home:index_page')

            else:
                pass
        return render(request, 'accounts/password_reset_confirm.html', {'form': form})


class UserPasswordResetCompleteView(auth_views.PasswordResetCompleteView):
    template_name = 'accounts/password_reset_complete.html'


