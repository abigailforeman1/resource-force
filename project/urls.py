from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/resources/', include('resources.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/categories/', include('categories.urls')),
    path('api/', include('jwt_auth.urls'))
]
