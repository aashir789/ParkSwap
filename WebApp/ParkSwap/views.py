from django.shortcuts import render, redirect
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.views.defaults import page_not_found

# Decorator to use built-in authentication system                                    
from django.contrib.auth.decorators import login_required

# Used to create and manually log in a user                                                                                                                                                                
from django.contrib.auth.models import User
from django.contrib.auth import login 
from django.contrib.auth import authenticate

# Django transaction system so we can use @transaction.atomic                                                                                                                                              
from django.core.urlresolvers import reverse 
from django.db import transaction



def home(request):
    
    return render(request,'ParkSwap/home.html',{})
