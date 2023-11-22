from django.shortcuts import render, redirect
from .models import Post, Tags
from django.contrib.auth.decorators import login_required
from .forms import PostForm, TagForm  # You need to create these forms
from rest_framework import viewsets
from .models import User, Tags, Post
from .serializers import UserSerializer, TagsSerializer, PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            form.save_m2m()  # To save many-to-many fields like tags
            return redirect('post_detail', post_id=post.id)
    else:
        form = PostForm()
    return render(request, 'create_post.html', {'form': form})

@login_required
def create_tag(request):
    if request.method == 'POST':
        form = TagForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('tags_list')  # Assuming you have a tag list view
    else:
        form = TagForm()
    return render(request, 'create_tag.html', {'form': form})
