from django.urls import path
from .views import MoviesList

urlpatterns = [
    path('movies/', MoviesList.as_view())
]