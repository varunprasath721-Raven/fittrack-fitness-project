from django.db import models
from django.contrib.auth.models import User

class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="workouts")
    name = models.CharField(max_length=120)
    category = models.CharField(max_length=80, default="Strength")
    duration = models.PositiveIntegerField(help_text="Minutes")
    calories = models.PositiveIntegerField(default=0)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name

class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="meals")
    name = models.CharField(max_length=120)
    meal_type = models.CharField(max_length=40, default="Breakfast")
    calories = models.PositiveIntegerField(default=0)
    protein = models.FloatField(default=0)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="progress")
    weight = models.FloatField()
    waist = models.FloatField(default=0)
    steps = models.PositiveIntegerField(default=0)
    note = models.TextField(blank=True)
    recorded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-recorded_at"]

    def __str__(self):
        return f"{self.user.username} - {self.weight} kg"
