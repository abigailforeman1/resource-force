# pylint: disable=no-member
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth import get_user_model

User = get_user_model()

class Comment(models.Model):
    text = models.CharField(max_length=350)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    owner = models.ForeignKey('jwt_auth.User', related_name='comments', on_delete=models.CASCADE)
    resource = models.ForeignKey('resources.resource', related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment {self.id} - Resource {self.resource}'