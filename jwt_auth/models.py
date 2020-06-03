from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    profile_image = models.CharField(max_length=500, blank=True)
    bio = models.CharField(max_length=500, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    website = models.CharField(max_length=200, blank=True)

    def __str__(self):
      return self.first_name