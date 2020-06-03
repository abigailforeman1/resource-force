# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Like
from resources.models import Resource
from .serializers import LikeSerializer
from jwt_auth.serializers import UserSerializer
from resources.serializers import PopulatedResourceSerializer

class LikeListView(APIView):
    
    permission_classes = (IsAuthenticated, )
    
    def post(self, request, pk):
        try:
            like = Like.objects.get(owner=request.user.id, resource=pk)
            like.delete()
        except Like.DoesNotExist:
            user = UserSerializer(request.user)
            resource = Resource.objects.get(pk=pk)
            Like.objects.create(owner=user.instance, resource=resource)
        resource = Resource.objects.get(pk=pk) # get the post with the new like
        serialized_resource = PopulatedResourceSerializer(resource)
        return Response(serialized_resource.data)