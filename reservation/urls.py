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
    path("update_booking/<int:user_id>",views.update_booking, name="update_booking"),
    path("profile_edit/<int:user_id>",views.profile_edit, name="profile_edit"),
    path("booking_edit/<int:user_id>",views.booking_edit, name="booking_edit"),
    path("all_bookings", views.all_bookings, name="all_bookings"),
    path("all_users", views.all_users, name="all_users"),
    path("delete_user/<int:user_id>",views.delete_user,name="delete_user"),
    path("retrieve_deleted_users/<int:user_id>",views.retrieve_deleted_users,name="retrieve_deleted_users"),
    path("all_deleted_users", views.all_deleted_users, name= "all_deleted_users"),
    path("cancel_booking/<int:user_id>",views.cancel_booking,name="cancel_booking"),
    path("retrieve_cancelled_bookings/<int:user_id>",views.retrieve_cancelled_bookings,name="retrieve_cancelled_bookings"),
    path("all_cancelled_bookings", views.all_cancelled_bookings, name= "all_cancelled_bookings"),
    path("my_bookings",views.my_bookings,name="my_bookings"),
]