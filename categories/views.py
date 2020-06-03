# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK

from .models import Category 
from .serializers import PopulatedCategorySerializer

class CategoryListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        categories = Category.objects.all()
        serialized_categories = PopulatedCategorySerializer(categories, many=True)
        return Response(serialized_categories.data, status=HTTP_200_OK)