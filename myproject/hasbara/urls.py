from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, TagsViewSet, PostViewSet
from .views import create_post, create_tag


app_name='hasbara'

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'tags', TagsViewSet)
router.register(r'posts', PostViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    path('create_post/', create_post, name='create_post'),
    path('create_tag/', create_tag, name='create_tag'),

]