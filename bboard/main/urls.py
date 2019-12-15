from django.urls import path

from .views import index
from .views import other_page
from .views import BBLoginView
from .views import BBLogoutView
from .views import profile
from .views import ChangeUserInfoView
from .views import BBPasswordChangeView

app_name = 'main'
urlpatterns = [
        path('accounts/password/change/', BBPasswordChangeView.as_view(), name='password_change'),
        path('accounts/profile/change/', ChangeUserInfoView.as_view(), name='profile_change'),
        path('accounts/logout/', BBLogoutView.as_view(), name='logout'),
        path('accounts/profile/', profile, name='profile'),
        path('accouns/login/', BBLoginView.as_view(), name='login'),
        path('<str:page>/', other_page, name='other'),
        path('', index, name='index'),
]
