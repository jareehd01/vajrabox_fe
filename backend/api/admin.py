from django.contrib import admin
from .models import Category, Diamond, Gemstone, JewelryProduct, ProductImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(Diamond)
class DiamondAdmin(admin.ModelAdmin):
    list_display = ('shape', 'carat', 'cut', 'color', 'clarity', 'certificate_number')
    list_filter = ('shape', 'cut', 'color', 'clarity')
    search_fields = ('certificate_number',)

@admin.register(Gemstone)
class GemstoneAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'origin', 'shape', 'carat', 'color', 'clarity')
    list_filter = ('type', 'shape', 'color', 'origin')
    search_fields = ('name', 'origin')

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

@admin.register(JewelryProduct)
class JewelryProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'metal_type', 'metal_purity', 'stock', 'available')
    list_filter = ('category', 'metal_type', 'available')
    search_fields = ('name', 'description')
    inlines = [ProductImageInline]
    filter_horizontal = ('diamonds', 'gemstones')
