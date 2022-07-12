from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import include, path
from rest_framework import permissions 
from drf_yasg.views import get_schema_view 
from drf_yasg import openapi 
  
schema_view = get_schema_view( 
    openapi.Info(
        title="Blog API",
        default_version="v1",
        description="A sample API for BLOG",
        terms_of_service="https://www.kjmeister.com/terms/",
        contact=openapi.Contact(email="khaledjj@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
  
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path("user/", include("accounts.urls", namespace="accounts")),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/dj-rest-auth/registration/',include('dj_rest_auth.registration.urls')),
    path('swagger/', schema_view.with_ui( 'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui( 'redoc', cache_timeout=0), name='schema-redoc'),
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)