from django.urls import path
from api import views

urlpatterns = [
    # path("/faculty/", views.get_faculty_code, name="get_faculty_code"),
    # path("/course/", views.get_course_code, name="get_course_code"),
    path("table/data/course/import/", views.make_course, name="make_course"),
    path("table/data/resource/import/", views.make_resource, name="make_resource"),
    path("table/view/", views.get_assign_table, name="get_assign_table"),
    path("courseoffer/view/", views.get_father_course_offer, name="get_father_course_offer"),
]
