from http import client
import json
import os
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

# models
from .models import User, UserProfile, Booking


def index(request):
    return render(request, "reservation/index.html")


def profile_details(request, user_id):
    userProfiles = UserProfile.objects.get(pk=user_id)
    return render(request, "reservation/profile_details.html", {
        'userProfile': userProfiles,
    })

def my_bookings(request):
    user = request.user
    bookings = Booking.objects.filter(client=user)
    return render(request, "reservation/my_bookings.html",
                  {'bookings': bookings})


def all_bookings(request):
    bookings = Booking.objects.filter(is_cancelled=False)
    return render(request, "reservation/all_bookings.html",
                  {'bookings': bookings})


def all_cancelled_bookings(request):
    bookings = Booking.objects.filter(is_cancelled=True)
    return render(request, "reservation/cancelled_bookings.html",
                  {'bookings': bookings})


def retrieve_cancelled_bookings(request, user_id):
    user = Booking.objects.get(pk=user_id)
    user.is_cancelled = False
    user.save()
    return HttpResponseRedirect(reverse('all_bookings'))


def cancel_booking(request, user_id):
    user = Booking.objects.get(pk=user_id)
    user.is_cancelled = True
    user.save()

    return HttpResponseRedirect(reverse('all_bookings'))


def all_users(request):
    all_profile = UserProfile.objects.filter(is_deleted=False)
    return render(request, "reservation/all_users.html",
                  {'all_profile': all_profile})


def all_deleted_users(request):
    all_profile = UserProfile.objects.filter(is_deleted=True)
    return render(request, "reservation/deleted_users.html",
                  {'all_profile': all_profile})


def retrieve_deleted_users(request, user_id):
    user = UserProfile.objects.get(pk=user_id)
    user.is_deleted = False
    user.save()
    return HttpResponseRedirect(reverse('all_users'))


def delete_user(request, user_id):
    user = UserProfile.objects.get(pk=user_id)
    user.is_deleted = True
    user.save()

    return HttpResponseRedirect(reverse('all_users'))


def booking_details(request, user_id):
    if request.user.is_authenticated:
        userProfiles = UserProfile.objects.get(pk=user_id)
        return render(request, "reservation/booking_details.html", {
            'userProfile': userProfiles,
        })

    # Everyone else is prompted to sign in
    else:
        return render(request, "reservation/login.html")


def save_changes(request, user_id):
    user = User.objects.get(pk=user_id)
    user_profile = UserProfile.objects.get(pk=user_id)
    if request.method == "POST":

        print(request.POST)

        user.username = request.POST.get("username")
        user.email = request.POST.get("email")
        user.first_name = request.POST.get("first_name")
        user.last_name = request.POST.get("last_name")
        user.save()

        if len(request.FILES) != 0:
            if len(user_profile.profile_img) > 0:
                os.remove(user_profile.profile_img.path)
            user_profile.profile_img = request.FILES.get('profile_img')
        user_profile.nationality = request.POST.get("nationality")
        user_profile.phone_no = request.POST.get("phone_no")
        user_profile.location = request.POST.get("location")
        user_profile.save()
        messages.success(request, "Profile Updated Successfully!")
        return HttpResponseRedirect(
            reverse('profile_details', args=(user_id, )))
    else:
        return HttpResponseRedirect(
            reverse('profile_details', args=(user_id, )))


def update_booking(request, user_id):
    book = Booking.objects.get(pk=user_id)
    if request.method == "POST":

        book.client.username = request.POST.get("username")
        book.client.email = request.POST.get("email")
        book.client.first_name = request.POST.get("first_name")
        book.client.last_name = request.POST.get("last_name")

        book.user_profile.nationality = request.POST.get("nationality")
        book.user_profile.phone_no = request.POST.get("phone_no")
        book.user_profile.location = request.POST.get("location")

        book.room_type = request.POST.get("room_type")
        book.room_category = request.POST.get("room_category")
        book.numAdults = request.POST.get("numAdults")
        book.numKids = request.POST.get("numKids")
        book.checkIn = request.POST.get("checkIn")
        book.checkOut = request.POST.get("checkOut")
        book.mop = request.POST.get("mop")
        book.save()
        messages.success(request, "Book Updated Successfully!")
        return HttpResponseRedirect(reverse('booking_edit', args=(user_id, )))
    else:
        return HttpResponseRedirect(reverse('booking_edit', args=(user_id, )))


def profile_edit(request, user_id):
    userProfiles = UserProfile.objects.get(pk=user_id)
    return render(request, "reservation/profile_edit.html", {
        'userProfile': userProfiles,
    })


def booking_edit(request, user_id):
    book = Booking.objects.get(pk=user_id)
    return render(request, "reservation/booking_edit.html", {
        'book': book,
    })


def book_room(request, user_id):
    if request.method == "POST":
        user = request.user
        user_profile = UserProfile.objects.get(pk=user_id)
        # phone_no = request.POST["phone_no"]
        # nationality = request.POST["nationality"]
        # location = request.POST["nationality"]

        room_category = request.POST["room_category"]
        room_type = request.POST["room_type"]
        numAdults = request.POST["numAdults"]
        numKids = request.POST["numKids"]
        checkIn = request.POST["checkIn"]
        checkOut = request.POST["checkOut"]
        mop = request.POST["mop"]

        try:

            book = Booking(client=user,
                           user_profile=user_profile,
                           checkIn=checkIn,
                           checkOut=checkOut,
                           numAdults=numAdults,
                           numKids=numKids,
                           mop=mop,
                           room_category=room_category,
                           room_type=room_type)
            book.save()
        except IntegrityError:
            messages.error(request, "Booking Failed!")
            return render(
                request,
                "reservation/booking_details.html",
                {
                    "checkIn": checkIn,
                    "checkOut": checkOut,
                    # "phone_no": phone_no,
                    # "nationality": nationality,
                    # "location": location,
                    "numAdults": numAdults,
                    "numKids": numKids,
                    "mop": mop,
                    "room_category": room_category,
                    "room_type": room_type
                })
        messages.success(request, "Boooked Successfully!")
        #after booking it will stay at the booking_details page
        return HttpResponseRedirect(
            reverse('booking_details', args=(user_id, )))
    else:
        return render(request, "reservation/index.html")


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            messages.error(request, "Invalid username and/or password!")
            return HttpResponseRedirect(reverse('login'))
    else:
        return render(request, "reservation/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        role = request.POST["role"]

        #userProfile
        phone_no = request.POST["phone_no"]
        nationality = request.POST["nationality"]
        location = request.POST["location"]
        # profile_img = request.FILES["profile_img"]
        profile_img = request.FILES.get('profile_img')

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if role.upper() == "ADMIN":
            is_staff = True
        else:
            is_staff = False

        if password != confirmation:
            messages.error(request, "Password Must Match")
            return render(
                request, "reservation/register.html", {
                    "username": username,
                    "email": email,
                    "first_name": first_name,
                    "last_name": last_name,
                    "role": role,
                    "phone_no": phone_no,
                    "nationality": nationality,
                    "location": location
                })
        # Attempt to create new user
        try:
            user = User.objects.create_user(username=username,
                                            email=email,
                                            password=password,
                                            first_name=first_name,
                                            last_name=last_name,
                                            is_staff=is_staff)
            user.save()
            user_profile = UserProfile(client=user,
                                       phone_no=phone_no,
                                       nationality=nationality,
                                       location=location,
                                       profile_img=profile_img)
            user_profile.save()
        except IntegrityError:
            messages.error(request, "Username Already taken!")
            return render(
                request, "reservation/register.html", {
                    "username": username,
                    "email": email,
                    "first_name": first_name,
                    "last_name": last_name,
                    "role": role,
                    "phone_no": phone_no,
                    "nationality": nationality,
                    "location": location
                })
        messages.success(request,
                         "Registered Successfully! You can now Log in")
        return HttpResponseRedirect(reverse('register'))
    else:
        return render(request, "reservation/register.html")