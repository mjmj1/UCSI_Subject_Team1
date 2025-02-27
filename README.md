# UCSI_Subject_Team1

# 🚀🚀Super Easy Server Setup Guide !!

If you're using Windows, it's recommended to use Git Bash.  

### 📂 0. Set the Folder Location to "back"  
Use the `cd` command to navigate to the `back` folder.

### 💻 1. Create a Virtual Environment  
Run the following command in `cmd` to create a virtual environment:  
```sh
python -m venv venv
```

### ▶️ 2. Activate the Virtual Environment
Mac/Linux
``` sh
source venv/bin/activate
```
window
``` cmd
venv\Scripts\activate
```
Run the appropriate command in `cmd` to activate the virtual environment.

### 📦 3. Install Required Packages
```
pip install -r requirements.txt
```

### 🐋 4. Run Docker
First, ensure Docker is running. Then, execute the following command in `cmd`:
```
docker-compose up -d
```
This will use the `docker-compose.yml` file to automatically configure Docker and create a PostgreSQL database.

### 📁 5. Place the .env File
Place the shared `.env` file inside the `back` folder.
The `.env` file contains sensitive information that should not be uploaded to Git.

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




