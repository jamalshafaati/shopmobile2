import django_filters
from.models import *
from django_filters import DateRangeFilter


class productfilter(django_filters.FilterSet):
    #price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt',label='بیشتر از این مقدار')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt',label='کمتر از این مقدار')

    #manufacturer__name = django_filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model=product
        fields=( 'price__lt','price__gt',)

class nameproductfilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name='name',lookup_expr='icontains',label='جست وجو',)
    #has_category = django_filters.BooleanFilter(field_name='name', lookup_expr='isnull', exclude=True)
    #category = django_filters.ChoiceFilter(field_name='category',)
    #slug = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = product
        fields = ['name',]
       # fields = {
           ##
        # 'slug': ['exact', 'icontains'],
      #  }

