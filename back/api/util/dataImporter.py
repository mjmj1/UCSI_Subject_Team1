import os
import pandas as pd
from django.conf import settings
from django.core.management import call_command
from api.models import ResourceRoom

RESOURCEROOMPATH = 'CSD - Resource Room.xlsx'

def import_excel_to_db():

    file_path = os.path.join(settings.BASE_DIR, 'datas', RESOURCEROOMPATH)  # 엑셀 파일 경로 설정
    if not os.path.exists(file_path):
        print("파일이 존재하지 않습니다.")
        return

    df = pd.read_excel(file_path)  # 엑셀 파일 읽기

    df.fillna({
        'Lecture': 'N',
        'Tutorial': 'N',
        'Lab': 'N',
    }, inplace=True)

    data_list = []

    for _, row in df.iterrows():
        data = ResourceRoom(
            resource_code=row['Resource Code'],
            description=row['Description'],
            capacity=row['Capacity'],
            lecture=row['Lecture'],
            tutorial=row['Tutorial'],
            lab=row['Lab'],
            imus='',
        )

        data_list.append(data)


    ResourceRoom.objects.bulk_create(data_list)

    print("데이터베이스에 데이터 저장 완료!")
