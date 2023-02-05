from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('users/create', views.create_user, name='create_user'),
    path('users/<int:user_id>', views.get_user, name='get_user'),
    path('users/show', views.get_users, name='get_users'),
    path('users/update/<int:user_id>', views.update_user, name='update_user'),
    path('users/delete/<int:user_id>', views.delete_user, name='delete_user')
]