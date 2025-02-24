from django.urls import path
from .views import upload_excel, import_data, make_tables

urlpatterns = [
    path("import/", import_data, name="import_data"),
    path("tables/", make_tables, name="make_tables"),
    path("upload-excel/", upload_excel, name="upload_excel"),
]