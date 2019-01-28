from django.urls import path
from .views import RecommendationsList

urlpatterns = [
    path('recommendations/', RecommendationsList.as_view())
]