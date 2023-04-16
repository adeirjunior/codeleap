from rest_framework.response import Response
import requests
import json

def getCareers(request):
    url = 'https://dev.codeleap.co.uk/careers/'
    response = requests.get(url)
    data = dict(response.json())
    json_str = json.dumps(data['results'])
    results = json.loads(json_str)
    return Response(results)

def createCareer(request):
    url = 'https://dev.codeleap.co.uk/careers/'
    data = json.loads(request.body)
    
    if not data:
        return Response({'error': 'Dados de entrada inválidos.'}, status=400)

    try:
        response = requests.post(url, json=data)
        response.raise_for_status()
        return Response(response.json())
    except requests.exceptions.RequestException as e:
        print(f'Erro ao fazer a solicitação HTTP: {e}')
        return Response({'error': 'The server has finded bencontrou um erro ao processar a solicitação.'}, status=500)

def updateCareer(request, id):
    url = f'https://dev.codeleap.co.uk/careers/{id}/'
    data = json.loads(request.body)
    
    if not data:
        return Response({'error': 'Dados de entrada inválidos.'}, status=400)

    try:
        response = requests.patch(url, json=data)
        response.raise_for_status()
        return Response(response.json())
    except requests.exceptions.RequestException as e:
        print(f'Erro ao fazer a solicitação HTTP: {e}')
        return Response({'error': 'The server has finded bencontrou um erro ao processar a solicitação.'}, status=500)
    
def deleteCareer(request, id):
    url = f'https://dev.codeleap.co.uk/careers/{id}'
    requests.delete(url)
    return Response('Career was deleted!')