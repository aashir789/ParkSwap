from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'ParkSwap.views.home', name='home'),
    url(r'^logged-in-home$', 'ParkSwap.views.logged_in', name='loggedin'),

    url(r'^wait$', 'ParkSwap.views.wait', name='wait'),

    url(r'^sign-up$', 'ParkSwap.views.sign_up', name='signedup'),

    url(r'^accepted-parking$', 'ParkSwap.views.accepted_parking', name='acceptedparking')

)
