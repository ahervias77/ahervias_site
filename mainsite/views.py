from django.shortcuts import render


def index(request):
    return render(request, 'mainsite/index.html')

def resume(request):
    return render(request, 'mainsite/resume.html')

def projects(request):
    return render(request, 'mainsite/projects.html')
