from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class UserProfile(models.Model):
    #default = None means that it will store none if the user decides not to fill the data.
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="userprofile_user",default=None)
    department = models.CharField(max_length=100)
    course = models.CharField(max_length=300)
    url = models.CharField(max_length=800)
    section = models.CharField(max_length=300)
    #auto_now_add = a start date you first add a listings
    created_at = models.DateTimeField(auto_now_add=True)
    #auto_now = the date when you modifed/update a listings
    update_at = models.DateTimeField(auto_now=True)