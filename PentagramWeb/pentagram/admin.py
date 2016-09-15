from django.contrib import admin

# Register your models here.
from pentagram.models import Photo
from pentagram.models import Comment

admin.site.register(Photo)
admin.site.register(Comment)
