from django.http import HttpResponse
from django.contrib.auth.models import User, Group
from .models import User, Group, Plan
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse("Hello, world. You're at the entities index.")


@csrf_exempt
def create_user(request, availabilities: list[str]):
    user = User(availabilities=availabilities)
    return HttpResponse(user)


def get_user(request, user_id: int):
    user = User.objects.get(pk=user_id)
    return HttpResponse(user)


def get_users(request):
    users = User.objects.all()
    return HttpResponse(users)


def update_user(request, availabilities: list[str]):
    user = User.objects.update(availabilities=availabilities)
    return HttpResponse(user)


def delete_user(request, user_id: int):
    user = User.objects.get(pk=user_id)
    user.delete()
    return HttpResponse(user_id)
