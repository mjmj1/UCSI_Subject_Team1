import os
import pandas as pd
from django.conf import settings
from api.models import ResourceRoom

RESOURCEROOMPATH = 'CSD - Resource Room.xlsx'


def make_resource_table():
    file_path = os.path.join(settings.BASE_DIR, 'datas', RESOURCEROOMPATH)
    if not os.path.exists(file_path):
        print("파일이 존재하지 않습니다.")
        return

    df = pd.read_excel(file_path)

    df.fillna({
        'Lecture': 'N',
        'Tutorial': 'N',
        'Lab': 'N',
    }, inplace=True)

    df = add_room_tag(df)

    print(df.head())

    data_list = []

    for _, row in df.iterrows():
        data = ResourceRoom(
            ResourceCode=row['Resource Code'],
            Description=row['Description'],
            Capacity=row['Capacity'],
            Lecture=row['Lecture'],
            Tutorial=row['Tutorial'],
            Lab=row['Lab'],
            Group=row['Group'],
            Clinic=row['Clinic'],
            PBL=row['PBL'],
            Kitchen=row['Kitchen'],
            Drawing=row['Drawing'],
            Imus=row['iMus'],
        )

        data_list.append(data)

    ResourceRoom.objects.bulk_create(data_list)

    print("데이터베이스에 데이터 저장 완료!")


def add_room_tag(df):
    df['iMus'] = df['Resource Code'].apply(lambda x: 'Y' if 'imus' in str(x).lower() else 'N')
    df['Kitchen'] = df['Resource Code'].apply(lambda x: 'Y' if 'kitchen' in str(x).lower() else 'N')
    df['PBL'] = df['Resource Code'].apply(lambda x: 'Y' if 'PBL' in str(x).lower() else 'N')

    df['Drawing'] = None
    df['Group'] = None
    df['Clinic'] = None

    return df
