from django.contrib import admin
from .models import product,Catgory

# Register your models here.
admin.site.register(Catgory)

@admin.register(product)
class productadmin(admin.ModelAdmin):
    raw_id_fields = ('category',)
