from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'ParkSwap.views.home', name='home'),
)
