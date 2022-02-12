from email.policy import default
from http import client
from pyexpat import model
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class UserProfile(models.Model):
    #default = None means that it will store none if the user decides not to fill the data.
    client = models.ForeignKey(User, on_delete=models.CASCADE,related_name="userprofile_user",default=None)
    phone_no = models.CharField(max_length=200)
    nationality= models.CharField(max_length=200)
    location =  models.CharField(max_length=200)
    profile_img = models.ImageField(null=True, blank = True, upload_to = "images/")
    #auto_now_add = a start date you first add a UserProfile
    created_at = models.DateTimeField(auto_now_add=True)
    #auto_now = the date when you modifed/update a UserProfile
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.client)

class Booking(models.Model):
    #default = None means that it will store none if the user decides not to fill the data.
    client = models.ForeignKey(User, on_delete=models.CASCADE,related_name="booking",default=None)
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE,related_name="booking_profile",default=None)
    checkIn = models.CharField(max_length=100)
    checkOut = models.CharField(max_length=100)
    numAdults = models.IntegerField(default=0)
    numKids = models.IntegerField(default=0)
    mop = models.CharField(max_length=100)
    room_category = models.CharField(max_length=200,default=None)
    room_type = models.CharField(max_length=100,default=None)
    #auto_now_add = a start date you first add a listings
    created_at = models.DateTimeField(auto_now_add=True)
    #auto_now = the date when you modifed/update a listings
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.client)