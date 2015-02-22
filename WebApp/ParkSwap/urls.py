from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'ParkSwap.views.home', name='home'),
    url(r'^search$', 'ParkSwap.views.logged_in', name='search'),
    url(r'^wait$', 'ParkSwap.views.wait', name='wait'),
    url(r'^sign-up$', 'ParkSwap.views.sign_up', name='signedup'),
    url(r'^no-sign-up-home$', 'ParkSwap.views.no_signup_home', name='nosignuphome')


)
