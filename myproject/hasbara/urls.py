from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TagsViewSet, PostViewSet

app_name='hasbara'

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'tags', TagsViewSet)
router.register(r'posts', PostViewSet)


urlpatterns = [
    path('', include(router.urls)),
]