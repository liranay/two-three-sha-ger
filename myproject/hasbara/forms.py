# Import necessary modules
from django import forms
from .models import Post, Tags

# Create a form class for the Post model
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'tags', 'media']

class TagForm(forms.ModelForm):
    class Meta:
        model = Tags
        fields = ['tag_name']
        labels = {
            'tag_name': 'Tag Name',
        }
