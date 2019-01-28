from rest_framework import serializers
from .models import Movie

class MovieSerializzer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'
        lookup_field = 'title'
        extra_kwargs = {
            'url': {'lookup_field': 'title'}
        }