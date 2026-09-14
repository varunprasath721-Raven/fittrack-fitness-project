from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Workout, Meal, Progress
from .serializers import RegisterSerializer, WorkoutSerializer, MealSerializer, ProgressSerializer

@api_view(["POST"])
@permission_classes([AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({"id": user.id, "username": user.username}, status=status.HTTP_201_CREATED)

class UserOwnedViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return self.model.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class WorkoutViewSet(UserOwnedViewSet):
    model = Workout
    serializer_class = WorkoutSerializer

class MealViewSet(UserOwnedViewSet):
    model = Meal
    serializer_class = MealSerializer

class ProgressViewSet(UserOwnedViewSet):
    model = Progress
    serializer_class = ProgressSerializer
