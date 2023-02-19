from django.db import models
from django.urls import reverse

import django_filters
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

    def get_absolute_url(self):
        return reverse('products:cattgory_slugg', args=[self.slug])

    def __str__(self):
        return self.name
class product(models.Model):
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
    crated=models.DateTimeField(auto_now_add=True)
    updeted=models.DateTimeField(auto_now=True)

    class Meta:
        ordering=('name',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('products:product_dateil', args=[self.slug])
class Image(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='productsub')
    name = models.CharField(max_length=11)
    Image = models.ImageField()

class propert(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='productsubproper')
    name = models.CharField(max_length=11)

class Producta(models.Model):
    pass






