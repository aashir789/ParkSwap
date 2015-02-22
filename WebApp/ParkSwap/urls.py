from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'ParkSwap.views.home', name='home'),
    url(r'^search$', 'ParkSwap.views.search', name='search'),
    url(r'^wait$', 'ParkSwap.views.wait', name='wait'),
    url(r'^sign-up$', 'ParkSwap.views.sign_up', name='signedup'),
    url(r'^login$', 'django.contrib.auth.views.login', {'template_name':'ParkSwap/login.html'}, name='login')


)
