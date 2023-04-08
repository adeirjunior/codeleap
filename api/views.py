from rest_framework.decorators import api_view
from .utils import getCarriers

@api_view(['GET'])
def getCarriersView(request):
    if request.method == 'GET':
        return getCarriers(request)
