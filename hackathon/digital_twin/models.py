from django.db import models

# Create your models here.


class Notifications(models.Model):
    STATUS_CHOICES = [('success', 'success'), ('warning', 'warning'), ('failure', 'failure')]
    title = models.CharField(max_length=64)
    body = models.CharField(max_length=64)
    status = models.CharField(choices=STATUS_CHOICES, max_length=16)
    created = models.DateField(auto_now=True)
