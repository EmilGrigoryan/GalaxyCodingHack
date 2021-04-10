from django.contrib import admin
from django.urls import path, include
from digital_twin.views import get_notification, get_electric_all, get_electric_mode

urlpatterns = [ 
    path('/history/', get_notification, name='get_notification'),
    path('/electric/all/', get_electric_all, name='get_electric_all'),
    path('/electric/', get_electric_mode, name='get_electric_mode'),
]
