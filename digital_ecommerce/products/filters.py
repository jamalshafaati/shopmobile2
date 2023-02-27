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
class renage_filter(django_filters.RangeFilter):
    """Filter for Books by Price"""
    price =django_filters.RangeFilter()

    class Meta:
        model = product
        fields = ['price']


