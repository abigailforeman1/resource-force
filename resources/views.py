# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status

from .models import Resource
from .serializers import ResourceSerializer, PopulatedResourceSerializer
  
class ResourceListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

# here we are creating a get request for all the populated resources and returning the response
    def get(self, _request):
        resources = Resource.objects.all()
        serialized_resources = PopulatedResourceSerializer(resources, many=True)
        return Response(serialized_resources.data,
        status=status.HTTP_200_OK)

# here we are creating a post request for new resources being added to the database. It attaches the current users id as the owner of the resource and checks if the request is valid according to the Resource model we have made 
    def post(self, request):
        request.data['owner'] = request.user.id
        new_resource = ResourceSerializer(data=request.data)
        if new_resource.is_valid():
            new_resource.save()
            return Response(new_resource.data, status=status.HTTP_201_CREATED)
        return Response(new_resource.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY) 

class ResourceDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

# here we are creating a function that gets the resource based on it's primary key (pk)
    def get_resource(self, pk):
        try:
            return Resource.objects.get(pk=pk)
        except Resource.DoesNotExist:
            raise NotFound()

# here we write a function to check if the owner of the resource is the same as the current user 
    def is_resource_owner(self, resource, user):
        if resource.owner.id != user.id:
            raise PermissionDenied()
    
# here we are creating a get request for 1 resource that finds the resource with the matching pk
    def get(self, _request, pk):
        resource = self.get_resource(pk)
        serialized_resource = PopulatedResourceSerializer(resource)
        return Response(serialized_resource.data, status=status.HTTP_200_OK)

#  here we have created a put request to update an existing resource. The function finds the resource to update using the above function and checks if the person trying to update is the owner using the function above also. It then checks if the new data is valid and saves if so.
    def put(self, request, pk):
        resource_to_update = self.get_resource(pk)
        self.is_resource_owner(resource_to_update, request.user)
        request.data['owner'] = request.user.id
        updated_resource = ResourceSerializer(resource_to_update, data=request.data)
        if updated_resource.is_valid():
            updated_resource.save()
            return Response(updated_resource.data, status=status.HTTP_200_OK)
        return Response(updated_resource.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# will add a delete request