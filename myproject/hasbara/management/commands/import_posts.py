from django.core.management.base import BaseCommand
from hasbara.models import Post, Tags
import json
import os

class Command(BaseCommand):
    help = 'Load a list of posts into the database'

    def handle(self, *args, **kwargs):
        # Construct the full path to the JSON file
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_path = os.path.join(dir_path, 'post_data.json')

        with open(file_path, 'r') as file:
            posts = json.load(file)
            for item in posts:
                post = Post(title=item['title'], media=item.get('filename', ''), description=item.get('description', ''))
                post.save()
                for tag_name in item['tags']:
                    tag, created = Tags.objects.get_or_create(tag_name=tag_name)
                    post.tags.add(tag)
                post.save()
