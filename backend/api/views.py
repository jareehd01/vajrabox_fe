from rest_framework import generics
from .models import Category, JewelryProduct
from .serializers import CategorySerializer, JewelryProductSerializer

class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class JewelryProductListCreate(generics.ListCreateAPIView):
    queryset = JewelryProduct.objects.all()
    serializer_class = JewelryProductSerializer
