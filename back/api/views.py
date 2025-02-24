from django.shortcuts import render

import pandas as pd
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from api.util.dataImporter import import_excel_to_db
from api.util.tables import make_course_tables


def home(request):
    return HttpResponse("Hello, Django! This is the home page.")

def import_data(request):
    if request.method == 'GET':
        import_excel_to_db()
        return JsonResponse({"message": "성공적으로 DB에 저장되었습니다."})
    return JsonResponse({"error": "GET 요청만 허용됩니다."}, status=400)

def make_tables(request):
    if request.method == 'GET':
        make_course_tables()
        return JsonResponse({"message": "성공적으로 DB에 저장되었습니다."})
    return JsonResponse({"error": "GET 요청만 허용됩니다."}, status=400)


@csrf_exempt
def upload_excel(request):
    if request.method == "POST" and request.FILES.get("file"):
        excel_file = request.FILES["file"]

        try:
            # 파일 저장 (선택 사항)
            # fs = FileSystemStorage()
            # filename = fs.save(excel_file.name, excel_file)
            # file_path = fs.path(filename)

            # Pandas로 Excel 데이터 읽기
            df = pd.read_excel(excel_file)

            print(df.head())
            
            # 데이터프레임을 Django ORM을 사용해 PostgreSQL에 저장
            # for _, row in df.iterrows():
            #     Employee.objects.create(
            #         name=row["Name"], 
            #         age=row["Age"], 
            #         department=row["Department"]
            #     )

            return JsonResponse({"message": "데이터 저장 성공!"}, status=200)

        except Exception as e:
            return JsonResponse({"error": f"파일 처리 중 오류 발생: {str(e)}"}, status=400)

    return JsonResponse({"error": "파일이 없거나 POST 요청이 아닙니다."}, status=400)