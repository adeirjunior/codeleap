from rest_framework.response import Response
import requests
import json


def getCarriers(request):
    url = 'https://dev.codeleap.co.uk/careers/'
    response = requests.get(url)
    data = dict(response.json())
    json_str = json.dumps(data['results'])
    results = json.loads(json_str)
    return Response(results)
