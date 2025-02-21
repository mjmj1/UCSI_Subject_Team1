from django.urls import path
from .views import upload_excel, import_data

urlpatterns = [
    path("import/", import_data, name="import_data"),
    path("upload-excel/", upload_excel, name="upload_excel"),
]