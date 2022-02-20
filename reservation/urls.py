from unicodedata import name
import django

from django.contrib.auth import views as auth_views
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
    path("cancel_mybookings/<int:user_id>",views.cancel_mybookings,name="cancel_mybookings"),
    path("glasgow_room",views.glasgow_room,name="glasgow_room"),
    path("bozeman_room",views.bozeman_room,name="bozeman_room"),
    path("miami_room",views.miami_room,name="miami_room"),
    path("savanna_room",views.savanna_room,name="savanna_room"),
    path("tulum_room",views.tulum_room,name="tulum_room"),

    path("view_reciept/<int:user_id>",views.view_reciept,name="view_reciept"),

    path('reset_password/',
     auth_views.PasswordResetView.as_view(template_name="reservation/password_reset.html"),
     name="reset_password"),

    path('reset_password_sent/', 
        auth_views.PasswordResetDoneView.as_view(template_name="reservation/password_reset_sent.html"), 
        name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
     auth_views.PasswordResetConfirmView.as_view(template_name="reservation/password_reset_form.html"), 
     name="password_reset_confirm"),

    path('reset_password_complete/', 
        auth_views.PasswordResetCompleteView.as_view(template_name="reservation/password_reset_done.html"), 
        name="password_reset_complete"),
]