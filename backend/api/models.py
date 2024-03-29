from django.db import models

class Carrier(models.Model):
    username = models.TextField(null=True, blank=True)
    created_datetime = models.DateTimeField(auto_now_add=True)
    title = models.TextField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.body[0:50]
