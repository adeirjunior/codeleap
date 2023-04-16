from rest_framework.decorators import api_view
from .utils import getCareers, createCareer, deleteCareer, updateCareer

@api_view(['GET', 'POST'])
def getCareersView(request):
    if request.method == 'GET':
        return getCareers(request)
    if request.method == 'POST':
        return createCareer(request)
    
@api_view(['PATCH', 'DELETE'])
def getCareerView(request, id):
    if request.method == 'PATCH':
        return updateCareer(request, id)
    if request.method == 'DELETE':
        return deleteCareer(request, id)

