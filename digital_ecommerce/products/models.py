from django.db import models
from django.urls import reverse
<<<<<<< HEAD
import django_filters
=======
>>>>>>> origin/master
# Create your models here.
class Catgory(models.Model):
    sub_slug=models.ForeignKey('self',on_delete=models.CASCADE,related_name='subcategory',null=True,blank=True)
    is_sub=models.BooleanField(default=False)
    name=models.CharField(max_length=200)
    slug=models.SlugField(max_length=200,unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'my_catgory'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
class product(models.Model):
<<<<<<< HEAD
=======
    MEDIA_CHOICES =[
        ('Audio', (
            ('vinyl', 'Vinyl'),
            ('cd', 'CD'),)),
        ('Video', (
            ('vhs', 'VHS Tape'),
            ('dvd', 'DVD'),
        )),
        ('unknown', 'Unknown'),]
>>>>>>> origin/master
    category=models.ManyToManyField(Catgory)
    name=models.CharField(max_length=11)
    price=models.IntegerField(help_text="براساس تومان")
    datetime=models.DateTimeField()
    color=models.CharField(max_length=100)
    MedalType = models.TextChoices('MedalType', 'GOLD SILVER BRONZE')
    garanti=models.CharField(max_length=110)
    slug=models.SlugField(unique=True,max_length=200)
    aviable=models.BooleanField(default=True)
    descriptions=models.TextField()
<<<<<<< HEAD
=======
    property1=models.CharField(max_length=100,choices=MEDIA_CHOICES)
>>>>>>> origin/master
    crated=models.DateTimeField(auto_now_add=True)
    updeted=models.DateTimeField(auto_now=True)

    class Meta:
        ordering=('name',)

    def __str__(self):
        return self.name
class Image(models.Model):
    product=models.ForeignKey(product,on_delete=models.CASCADE,related_name='productsub')
    name=models.CharField(max_length=11)
    Image=models.ImageField()

class propert(models.Model):
    product=models.ForeignKey(product,on_delete=models.CASCADE,related_name='productsubproper')
    name=models.CharField(max_length=11)

class Producta(models.Model):
    producta=models.ForeignKey(product,on_delete=models.CASCADE,related_name='producta')
    image=models.ForeignKey(Image,on_delete=models.CASCADE,related_name='image_producta')
    propertya=models.ForeignKey(propert,on_delete=models.CASCADE,related_name='perppertu_producta')



'''class ProductFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')

    class Meta:
        model = product
        fields = ['price',]'''








