from django.db import models


class Order(models.Model):
    userId = models.IntegerField()
    goods = models.CharField(max_length=200)