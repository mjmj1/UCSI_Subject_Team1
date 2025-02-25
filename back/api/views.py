from django.shortcuts import render

from django.http import HttpResponse, JsonResponse

from api.util.resourceRoom import make_resource_table
from api.util.courseOffer import make_course_tables

from api.models import AssignTable, FatherCourseOffer


def make_resource(request):
    if request.method == 'GET':
        make_resource_table()
        return JsonResponse({"message": "성공적으로 DB에 저장되었습니다."})
    return JsonResponse({"error": "GET 요청만 허용됩니다."}, status=400)


def make_course(request):
    if request.method == 'GET':
        make_course_tables()
        return JsonResponse({"message": "성공적으로 DB에 저장되었습니다."})
    return JsonResponse({"error": "GET 요청만 허용됩니다."}, status=400)

# def connect_db():
#     load_dotenv()
#
#     conn = psycopg2.connect(
#         dbname=os.getenv('DB_NAME'),
#         user=os.getenv('DB_USER'),
#         password=os.getenv('DB_PASSWORD'),
#         host=os.getenv('DB_HOST', 'localhost'),
#         port=os.getenv('DB_PORT', '5432'),
#     )
#
#     return conn

def get_assign_table(request):
    code = request.GET.get('facultyCode', None)

    if code is None:
        return JsonResponse("")

    filtered_data = AssignTable.objects.filter(FacultyCode=code)
    return JsonResponse(list(filtered_data.values()), safe=False)

def get_father_course_offer(request):
    code = request.GET.get('facultyCode', None)

    if code is None:
        return JsonResponse("")

    filtered_data = FatherCourseOffer.objects.filter(FacultyCode=code)
    return JsonResponse(list(filtered_data.values()), safe=False)
