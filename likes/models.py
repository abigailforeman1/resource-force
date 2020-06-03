# pylint: disable=no-member
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Like(models.Model):
    owner = models.ForeignKey(User, related_name='likes', on_delete=models.CASCADE)
    resource = models.ForeignKey('resources.resource', related_name='likes', on_delete=models.CASCADE)

    def __str__(self):
        return f'Like from {self.owner} on {self.resource}'
    