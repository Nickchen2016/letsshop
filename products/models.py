from django.db import models

# Create your models here.
class Size(models.Model):
    size = models.CharField(max_length=16)

    def __str__(self):
        return self.size


class Product(models.Model):

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=30)
    description = models.TextField()
    slug = models.SlugField(max_length=20, unique=True, blank=True)
    price = models.IntegerField()
    discount = models.IntegerField()
    primaryImage= models.ImageField(default='default.png', blank=True)
    # stock = models.PositiveIntegerField(default=None)
    avaliable = models.BooleanField(default=True)
    date = models.DateTimeField(auto_now_add=True)
    size = models.ManyToManyField(Size)

    def __str__(self):
        return self.title


class Image(models.Model):
    image = models.ImageField(default='default.png', blank=True)
    product = models.ForeignKey(Product, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return self.image.name