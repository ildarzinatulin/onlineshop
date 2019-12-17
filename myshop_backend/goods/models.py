from django.db import models


# Create your models here.
class Goods(models.Model):
    img = models.CharField(max_length=128)
    name = models.CharField(max_length=20)
    price = models.IntegerField()
