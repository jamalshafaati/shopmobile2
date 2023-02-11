from django.db import models
from django.urls import reverse
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
    MEDIA_CHOICES =[
        ('Audio', (
            ('vinyl', 'Vinyl'),
            ('cd', 'CD'),)),
        ('Video', (
            ('vhs', 'VHS Tape'),
            ('dvd', 'DVD'),
        )),
        ('unknown', 'Unknown'),]
    category=models.ManyToManyField(Catgory)
    name=models.CharField(max_length=11)
    price=models.IntegerField(help_text="براساس تومان")
    datetime=models.DateTimeField()
    image=models.ImageField()
    slug=models.SlugField(unique=True,max_length=200)
    aviable=models.BooleanField(default=True)
    descriptions=models.TextField()
    property1=models.CharField(max_length=100,choices=MEDIA_CHOICES)
    crated=models.DateTimeField(auto_now_add=True)
    updeted=models.DateTimeField(auto_now=True)

    class Meta:
        ordering=('name',)

    def __str__(self):
        return self.name






