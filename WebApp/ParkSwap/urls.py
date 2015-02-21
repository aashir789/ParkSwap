from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'ParkSwap.views.home', name='home'),
    url(r'^logged-in-home$', 'ParkSwap.views.logged_in', name='loggedin'),
    url(r'^sign-up$', 'ParkSwap.views.sign_up', name='signedup')
)
