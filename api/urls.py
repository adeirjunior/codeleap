from django.urls import path
from .views import getCarriersView

urlpatterns = [
    path('careers/', getCarriersView, name="careers")
    
]
