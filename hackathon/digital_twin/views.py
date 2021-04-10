from django.shortcuts import render
from django.http import JsonResponse
from scripts.monitoring import *
from digital_twin.models import Notifications

# Create your views here.

def get_notification(request):
    n_list = ['title', 'body', 'status', 'created']
    result = []
    db = Notifications.objects.all()
    for i in db:
        result.append({'title': i.title, 'body': i.body, 'status': i.status, 'created': i.created})
    return JsonResponse(result, safe=False)


def get_electric_all(request):
    result = start()
    return JsonResponse(result)


def get_electric_mode(request):
    mode = request.GET['mode']
    result = start(mode)
    return JsonResponse(result)