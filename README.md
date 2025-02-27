# UCSI_Subject_Team1

# 🚀🚀엄청나게 쉬운 서버 실행 방법 !!


window의 경우, git bash를 사용하면 됩니다.
### 0. 폴더 위치를 back으로 설정
cd 커맨드를 통해 폴더 위치를 back에 위치시킵니다.

### 1. 가상환경 생성 💻
```
python -m venv venv
```
위 명령어를 cmd에서 실행하고 가상환경을 생성합니다.

### 2. 가상 환경 실행
Mac/Linux
```
source venv/bin/activate
```
window
```
venv\Scripts\activate
```
위 명령어를 cmd에서 실행하여 가상환경을 활성화합니다.

### 3. 필요 패키지 다운로드
```
pip install -r requirements.txt
```

### 4. Docker 실행 🐋
```
docker-compose up -d
```
docker를 실행한 후 위 명령어를 cmd에서 실행합니다.
그러면 docker-compose.yml 파일을 통해서 자동으로 docker가 구성되고 postgreSql DB가 생성됩니다.

### 5. .env 파일 위치
공유받은 .env 파일을 back 안에 위치시킵니다.
.env 파일을 git에 올라가면 안되는 정보들을 넣어둡니다.

### 6. 서버 실행 
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

위 코드를 전부 실행을 하면 서버가 시작됩니다.
위 루틴은 처음 git clone 이후 한번만 실행하면 됩니다.

이후 서버를 실행할 땐... 🤔

### etc. 서버 실행(위 과정을 모두 완료한 뒤)
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
6번 항목의 명령어를 실행해주면 서버가 실행됩니다.
서버를 실행한 땐 꼭 docker가 실행되어 있어야 합니다.

### etc2. docker 내의 DB에 DML을 사용하는 방법 !!! 🚀🚀
```
docker exec -it back-db-1 psql -U postgres -d project_db
```
위에 코드를 사용하면 docker 내 db에 접근하여 DML(select, update, delete, insert ...) 를 사용할 수 있습니다.


## 🚀 Project Execution Result  

![Project Execution Result](https://github.com/user-attachments/assets/6384ef0f-aad1-488f-b7fd-c60d31204f9f)




