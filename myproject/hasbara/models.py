from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    user_name = models.CharField(max_length=20)

    class Meta:
        app_label = 'hasbara'

# Tags Model
class Tags(models.Model):
    tag_name = models.CharField(max_length=100)

    def __str__(self):
        return self.tag_name

# Post Model
class Post(models.Model):
    title = models.TextField()
    description = models.TextField(blank=True, null=True)
    media = models.FileField(upload_to='media/', blank=True, null=True)  # You can specify media types in your form or view
    tags = models.ManyToManyField(Tags)

    def __str__(self):
        return f"Post {self.id}"
