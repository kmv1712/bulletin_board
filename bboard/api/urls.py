from django.urls import path

from .views import bbs, comments

urlpatterns = [
        path('bbs/<int:pk>/comments/', comments),
        path('bbs/', bbs),
]
