from rest_framework import generics
from .serializer import RecommendationSerializers
from .models import Recommendation

# Create your views here.
class RecommendationsList(generics.ListCreateAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializers
