from unicodedata import name
import django


from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("booking_details/<int:user_id>", views.booking_details, name="booking_details"),
    path("book_room/<int:user_id>", views.book_room, name="book_room"),
    path("profile_details/<int:user_id>",views.profile_details, name="profile_details"),
    path("save_changes/<int:user_id>",views.save_changes, name="save_changes"),
    path("profile_edit/<int:user_id>",views.profile_edit, name="profile_edit"),
    path("all_bookings", views.all_bookings, name="all_bookings"),
    path("all_users", views.all_users, name="all_users"),
]