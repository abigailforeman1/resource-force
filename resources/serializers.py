from rest_framework import serializers
from django.contrib.auth import get_user_model

from categories.serializers import CategorySerializer 
from comments.serializers import PopulatedCommentSerializer
from .models import Resource
User = get_user_model()

#  here we are using the Resource model and User model and creating a Popopulated Reesource Serializer that will populate each resource with an owner (showing their id and username), the categories it fits into to (it can have many), and comments (again it can have many)

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')

class ResourceSerializer(serializers.ModelSerializer): 
# write serializer - used still to create/update resources 

    class Meta:
        model = Resource
        fields = '__all__'

class PopulatedResourceSerializer(ResourceSerializer): 
# read serializer - used when you want to send populated data
    owner = UserSerializer()
    categories = CategorySerializer(many=True)
    comments = PopulatedCommentSerializer(many=True)