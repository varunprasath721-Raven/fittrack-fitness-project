from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Workout, Meal, Progress

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    class Meta:
        model = User
        fields = ["username", "email", "password"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = "__all__"
        read_only_fields = ["user", "created_at"]

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = "__all__"
        read_only_fields = ["user", "date"]

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = "__all__"
        read_only_fields = ["user", "recorded_at"]
