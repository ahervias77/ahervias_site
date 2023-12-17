from django.urls import path
from mainsite.views import index, resume, projects

app_name = 'mainsite'
urlpatterns = [
    path('', index, name='index'),
    path('resume', resume, name='resume'),
    path('projects', projects, name='projects'),
]
