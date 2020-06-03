from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# here I am building out my resource model with all the necesary fields and their arguments
# the owner field acts as a one to many relationship where 1 user can have many resources
#  the categories field acts as a many to many relationship as 1 resource can fit into many categories and 1 category can have many resources 

class Resource(models.Model):
    title = models.CharField(max_length=200, unique=True)
    original_author = models.CharField(max_length=200, blank=True)
    origin = models.CharField(max_length=200, blank=True)
    year_of_creation = models.IntegerField(blank=True)
    image = models.CharField(max_length=500, blank=True)
    link = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=3000)
    owner = models.ForeignKey(
        User,
        related_name='resources',
        on_delete=models.CASCADE
    )
    categories = models.ManyToManyField(
        'categories.Category',
        related_name='resources'
    )

    def __str__(self):
        return f'{self.title}'

