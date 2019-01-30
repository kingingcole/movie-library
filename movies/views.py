from rest_framework import generics
from .serializer import MovieSerializzer
from .models import Movie

# Create your views here.
class MoviesList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializzer
    lookup_field = 'title'
