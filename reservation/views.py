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
from .models import User, UserProfile


def index(request):
    return render(request, "reservation/index.html")

def bookNow(request):
    if request.user.is_authenticated:
        #Todo paltan ng booking stage
        return render(request, "reservation/booking-details.html")

    # Everyone else is prompted to sign in
    else:
        return render(request, "reservation/login.html")

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
            messages.error(request,"Invalid username and/or password!")
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

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if role.upper() == "ADMIN":
            is_staff = True
        else:
            is_staff = False

        if password != confirmation:
            messages.error(request,"Password Must Match")
            return render(request, "reservation/register.html",{
                "username":username,
                "email":email,
                "first_name": first_name,
                "last_name":last_name,
                "role":role,
            })
        # Attempt to create new user
        try:
            user = User.objects.create_user(username=username, email=email, password=password,
                                            first_name=first_name, last_name=last_name, is_staff=is_staff)
            user.save()
        except IntegrityError:
            messages.error(request,"Username Already taken!")
            return render(request, "reservation/register.html",{
                "username":username,
                "email":email,
                "first_name": first_name,
                "last_name":last_name,
                "role":role,
                "password":password
            })
        messages.success(request,"Registered Successfully! You can now Log in")
        return HttpResponseRedirect(reverse('register'))
    else:
        return render(request, "reservation/register.html")