from django.urls import path
from .views import getCareersView, getCareerView

urlpatterns = [
    path('careers/', getCareersView, name="careers"),
    path('careers/<str:id>/', getCareerView, name="career"),
    
]
