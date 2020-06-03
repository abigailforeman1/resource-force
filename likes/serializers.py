from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Like
User = get_user_model()

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
          model = Like
          fields = '__all__'