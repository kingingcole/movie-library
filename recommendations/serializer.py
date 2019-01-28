from rest_framework import serializers
from .models import Recommendation


class RecommendationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'