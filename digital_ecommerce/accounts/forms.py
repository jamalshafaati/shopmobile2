from django.core.exceptions import ValidationError
from django import forms
from .models import User
from django.contrib.auth.forms import ReadOnlyPasswordHashField


class UserCreationForm(forms.ModelForm):
    password = forms.CharField(label='password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email',)

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField(
        help_text="you can change password using <a href=\"../password/\">this form</a>")

    class Meta:
        model = User
        fields = ('email', 'password', 'last_login')

masseges={
    'required':'لطفا ایمیل وارد کنید',
    'invalid':'لطفا ایمیل درست وارد کنید ',

}
masseges1={
    'required':'لطفا کلمه عبور وارد کنید',
}


class RegisterForm(UserCreationForm,forms.Form):
    email = forms.EmailField(label="ادرس ایمیل",
                             widget=forms.EmailInput(attrs={'class': 'form-control _p_dir_ltr', 'type': 'email',
                                                            'placeholder': 'test@gmail.com'}),error_messages=masseges)
    password = forms.CharField(label="کلمه عبور",
                               widget=forms.PasswordInput(attrs=(
                                   {'type': 'password', 'placeholder': 'Password',
                                    'class': 'form-control _p_dir_ltr'})),error_messages=masseges1)
    def clean_email(self):
        email = self.cleaned_data['email']
        user1 = User.objects.filter(email=email).exists()
        if user1:
            raise ValidationError('this email redarly exist')
        return email


class LoginForm(forms.Form):
    email = forms.EmailField(label="ادرس ایمیل",
                             widget=forms.EmailInput(
                                 attrs={'class': 'form-control _p_dir_ltr', 'placeholder': 'test@gmail.com'}))
    password = forms.CharField(label="کلمه عبور", widget=forms.PasswordInput(
        attrs={'class': 'form-control _p_dir_ltr', 'placeholder': 'test@gmail.com'}))

class ResetPasswordForm(forms.Form):
    email = forms.EmailField(label='آدرس ایمیل',)


class PasswordResetConfirmForm(forms.Form):
    password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(widget=forms.PasswordInput())


class PasswordResetForm(forms.Form):
    email = forms.CharField(widget=forms.EmailInput())