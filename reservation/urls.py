from unicodedata import name
import django


from django.urls import path
from . import views

urlpatterns = [
  path('', views.say_hello, name = "hello")
]