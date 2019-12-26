from rest_framework import serializers

from main.models import Bb, Comment

class BbSerializer(serializers.ModelSerializer):
    """Сериализатор, который будет формировать список рубрик"""
    class Meta:
        model = Bb
        fields = ('id', 'title', 'content', 'price', 'created_at')


class CommentSerializer(serializers.ModelSerializer):
    """
        Сериализатор, который будет отправлять список комментариев и добавлять
        новые комментарии.
    """
    class Meta:
        model = Comment
        fields = ('bb', 'author', 'content', 'created_at')

