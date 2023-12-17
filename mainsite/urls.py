from django.urls import path
from mainsite.views import index

app_name = 'mainsite'
urlpatterns = [
    path('', index, name='index'),
]
