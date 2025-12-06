from django.urls import path
from .views import CategoryListCreate, JewelryProductListCreate

urlpatterns = [
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
    path('jewelry/', JewelryProductListCreate.as_view(), name='jewelryproduct-list-create'),
]
