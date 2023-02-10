from django.db import models

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

'''class property(models.Model):
    sub_slug=models.ForeignKey('self',on_delete=models.CASCADE,related_name='subcategory',null=True,blank=True)'''


class product(models.Model):
    category=models.ManyToManyField(Catgory)
    name=models.CharField(max_length=11)
    price=models.IntegerField(help_text="براساس تومان")
    datetime=models.DateTimeField()
    image=models.ImageField()
    slug=models.SlugField(unique=True,max_length=200)
    aviable=models.BooleanField(default=True)
    descriptions=models.TextField()
    crated=models.DateTimeField(auto_now_add=True)
    updeted=models.DateTimeField(auto_now=True)
    MedalType = models.TextChoices('MedalType', 'GOLD SILVER BRONZE')

    class Meta:
        ordering=('name',)

    def __str__(self):
        return self.name






