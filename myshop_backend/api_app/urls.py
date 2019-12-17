from .views import *
from django.urls import path

urlpatterns = [
    path('make_order/', OrderCreateView.as_view()),
    path('goods/', GoodsViewSet.as_view())
]