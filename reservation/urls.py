from unicodedata import name
import django


from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("booking_details", views.booking_details, name="booking_details"),
    path("book_room", views.book_room, name="book_room"),
]