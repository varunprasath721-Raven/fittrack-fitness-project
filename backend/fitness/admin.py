from django.contrib import admin
from .models import Workout, Meal, Progress

@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ("name", "user", "category", "duration", "calories", "completed")
    search_fields = ("name", "user__username")
    list_filter = ("category", "completed")

@admin.register(Meal)
class MealAdmin(admin.ModelAdmin):
    list_display = ("name", "user", "meal_type", "calories", "protein", "date")
    search_fields = ("name", "user__username")
    list_filter = ("meal_type",)

@admin.register(Progress)
class ProgressAdmin(admin.ModelAdmin):
    list_display = ("user", "weight", "waist", "steps", "recorded_at")
    search_fields = ("user__username",)
