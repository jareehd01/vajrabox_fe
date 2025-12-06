from rest_framework import serializers
from .models import Category, JewelryProduct

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class JewelryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = JewelryProduct
        fields = '__all__'
