import json
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


def profile_details(request,user_id):
    userProfiles = UserProfile.objects.get(pk=user_id)
    return render(request, "reservation/profile_details.html",{
        'userProfile': userProfiles,
    })


def booking_details(request,user_id):
    if request.user.is_authenticated:
        userProfiles = UserProfile.objects.get(pk=user_id)
        return render(request, "reservation/booking_details.html",{
            'userProfile': userProfiles,
        })

    # Everyone else is prompted to sign in
    else:
        return render(request, "reservation/login.html")

def save_changes(request, user_id):
    user = User.objects.get(id=user_id)
    userProfiles = UserProfile.objects.get(id = user_id)
    if request.method == "POST":


        # username = request.POST.get("username")
        # email = request.POST["email"]
        # first_name = request.POST["first_name"]
        # last_name = request.POST["last_name"]

        #userProfile
        # phone_no = request.POST.get('phone_no')
        # nationality = request.POST["nationality"]
        # location = request.POST["location"]
        # # profile_img = request.FILES["profile_img"]
        # profile_img = request.FILES.get('profile_img')

        # Ensure password matches confirmation
        # password = request.POST["password"]
        # confirmation = request.POST["confirmation"]

        # if password != confirmation:
        #     messages.error(request, "Password Must Match")
        #     return render(
        #         request, "reservation/register.html", {
        #             "username": username,
        #             "email": email,
        #             "first_name": first_name,
        #             "last_name": last_name,
        #             "role": role,
        #             "phone_no": phone_no,
        #             "nationality" : nationality,
        #             "location":location
        #         })

        # user.username = username
        # user.first_name = first_name
        # user.last_name = last_name
        # user.email = email
        # user.password = password
        user.save()

        userProfiles.phone_no = request.POST.get("phone_no")
        # userProfiles.nationality = nationality
        # userProfiles.location = location
        # userProfiles.profile_img = profile_img
        userProfiles.save()
        messages.success(request, "Updated Successfully!")
        return HttpResponseRedirect(reverse('profile_details', args=(user_id,)))

    else:
        return HttpResponseRedirect(reverse('profile_details', args=(user_id,)))

def book_room(request,user_id):
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
                           user_profile = user_profile,
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
                request, "reservation/booking_details.html", {
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
        return HttpResponseRedirect(reverse('booking_details', args=(user_id,)))
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
                    "nationality" : nationality,
                    "location":location
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
                    "nationality" : nationality,
                    "location":location
                })
        messages.success(request,
                         "Registered Successfully! You can now Log in")
        return HttpResponseRedirect(reverse('register'))
    else:
        return render(request, "reservation/register.html")