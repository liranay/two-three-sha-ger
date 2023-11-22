from django.contrib import admin
from .models import User, Tags, Post


# Custom admin classes
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'media', 'description')  # Fields to display in the list view
    search_fields = ['title', 'description']  # Fields to search in the admin
admin.site.register(Post, PostAdmin)

class TagsAdmin(admin.ModelAdmin):
    list_display = ('tag_name',)
admin.site.register(Tags, TagsAdmin)

# Register your models here
admin.site.register(User)  # Assuming you want to register the custom User model

