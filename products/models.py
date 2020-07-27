from django.db import models

# Create your models here.
class Size(models.Model):
    size = models.CharField(max_length=16)

    def __str__(self):
        return self.size


class Product(models.Model):
    # SHOE_SIZES = (
    #     ('M 7 / W 8.5','M 7 / W 8.5'),
    #     ('M 7.5 / W 9','M 7.5 / W 9'),
    #     ('M 8 / W 9.5','M 8 / W 9.5'),
    #     ('M 8.5 / W 10','M 8.5 / W 10'),
    #     ('M 9 / W 10.5','M 9 / W 10.5'),
    #     ('M 9.5 / W 11','M 9.5 / W 11'),
    #     ('M 10 / W 11.5','M 10 / W 11.5'),
    #     ('M 10.5 / W 12','M 10.5 / W 12'),
    #     ('M 11 / W 12.5','M 11 / W 12.5'),
    #     ('M 11.5 / W 13','M 11.5 / W 13'),
    #     ('M 12 / W 13.5','M 12 / W 13.5')
    # )
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.IntegerField()
    discount = models.IntegerField()
    stock = models.PositiveIntegerField(default=None)
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