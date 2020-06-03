from rest_framework import serializers 
from django.apps import apps 

from .models import Category
Resource = apps.get_model('resources', 'Resource')

class ResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resource
        fields = ('id', 'title', 'original_author')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class PopulatedCategorySerializer(CategorySerializer):
# populating the resouces onto the categories for the many to many relationship 
    resources = ResourceSerializer(many=True)