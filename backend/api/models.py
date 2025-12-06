
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Diamond(models.Model):
    SHAPE_CHOICES = [
        ('Round', 'Round'),
        ('Princess', 'Princess'),
        ('Cushion', 'Cushion'),
        ('Oval', 'Oval'),
        ('Emerald', 'Emerald'),
        ('Pear', 'Pear'),
        ('Asscher', 'Asscher'),
        ('Heart', 'Heart'),
        ('Radiant', 'Radiant'),
        ('Marquise', 'Marquise'),
    ]

    CUT_CHOICES = [
        ('Excellent', 'Excellent'),
        ('Very Good', 'Very Good'),
        ('Good', 'Good'),
        ('Fair', 'Fair'),
        ('Poor', 'Poor'),
    ]

    COLOR_CHOICES = [
        ('D', 'D'), ('E', 'E'), ('F', 'F'), ('G', 'G'), ('H', 'H'),
        ('I', 'I'), ('J', 'J'), ('K', 'K'), ('L', 'L'), ('M', 'M'),
        ('N', 'N'), ('O', 'O'), ('P', 'P'), ('Q', 'Q'), ('R', 'R'),
        ('S', 'S'), ('T', 'T'), ('U', 'U'), ('V', 'V'), ('W', 'W'),
        ('X', 'X'), ('Y', 'Y'), ('Z', 'Z'),
    ]

    CLARITY_CHOICES = [
        ('FL', 'Flawless'),
        ('IF', 'Internally Flawless'),
        ('VVS1', 'Very, Very Slightly Included 1'),
        ('VVS2', 'Very, Very Slightly Included 2'),
        ('VS1', 'Very Slightly Included 1'),
        ('VS2', 'Very Slightly Included 2'),
        ('SI1', 'Slightly Included 1'),
        ('SI2', 'Slightly Included 2'),
        ('I1', 'Included 1'),
        ('I2', 'Included 2'),
        ('I3', 'Included 3'),
    ]

    shape = models.CharField(max_length=50, choices=SHAPE_CHOICES)
    carat = models.DecimalField(max_digits=5, decimal_places=2)
    cut = models.CharField(max_length=50, choices=CUT_CHOICES)
    color = models.CharField(max_length=1, choices=COLOR_CHOICES)
    clarity = models.CharField(max_length=5, choices=CLARITY_CHOICES)
    certificate_number = models.CharField(max_length=255, unique=True, blank=True, null=True)

    def __str__(self):
        return f"{self.carat}ct {self.shape} Diamond ({self.color}, {self.clarity})"

class Gemstone(models.Model):
    TYPE_CHOICES = [
        ('Precious', 'Precious'),
        ('Semi-Precious', 'Semi-Precious'),
        ('Synthetic', 'Synthetic'),
    ]

    SHAPE_CHOICES = [
        ('Round', 'Round'),
        ('Princess', 'Princess'),
        ('Cushion', 'Cushion'),
        ('Oval', 'Oval'),
        ('Emerald', 'Emerald'),
        ('Pear', 'Pear'),
        ('Asscher', 'Asscher'),
        ('Heart', 'Heart'),
        ('Radiant', 'Radiant'),
        ('Marquise', 'Marquise'),
    ]

    name = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    origin = models.CharField(max_length=100, blank=True, null=True)
    shape = models.CharField(max_length=50, choices=SHAPE_CHOICES)
    carat = models.DecimalField(max_digits=5, decimal_places=2)
    color = models.CharField(max_length=50)
    clarity = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.carat}ct)"

class JewelryProduct(models.Model):
    METAL_CHOICES = [
        ('Gold', 'Gold'),
        ('Platinum', 'Platinum'),
        ('Silver', 'Silver'),
    ]

    PURITY_CHOICES = [
        ('14k', '14k'),
        ('18k', '18k'),
        ('22k', '22k'),
        ('24k', '24k'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')
    diamonds = models.ManyToManyField(Diamond, blank=True)
    gemstones = models.ManyToManyField(Gemstone, blank=True)
    metal_type = models.CharField(max_length=50, choices=METAL_CHOICES)
    metal_purity = models.CharField(max_length=10, choices=PURITY_CHOICES)
    stock = models.PositiveIntegerField(default=1)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(JewelryProduct, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return f"Image for {self.product.name}"
