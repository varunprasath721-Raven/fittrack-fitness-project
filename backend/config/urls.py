from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from fitness.views import WorkoutViewSet, MealViewSet, ProgressViewSet, register_view

router = DefaultRouter()
router.register("workouts", WorkoutViewSet, basename="workout")
router.register("meals", MealViewSet, basename="meal")
router.register("progress", ProgressViewSet, basename="progress")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/register/", register_view, name="register"),
    path("api/auth/token/", TokenObtainPairView.as_view(), name="token"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/", include(router.urls)),
    path("hello/", TemplateView.as_view(template_name="hello.html"), name="hello"),
]
