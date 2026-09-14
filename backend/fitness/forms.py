from django import forms
from .models import Meal, Progress

class MealForm(forms.ModelForm):
    class Meta:
        model = Meal
        fields = ["name", "meal_type", "calories", "protein"]

class ProgressForm(forms.ModelForm):
    class Meta:
        model = Progress
        fields = ["weight", "waist", "steps", "note"]
