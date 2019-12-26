from rest_framework import serializers

from main.models import Bb

class BbSerializer(serializers.ModelSerializer):
    """Сериализатор, который будет формировать список рубрик"""
    class Meta:
        model = Bb
        fields = ('id', 'title', 'content', 'price', 'created_at')
        
