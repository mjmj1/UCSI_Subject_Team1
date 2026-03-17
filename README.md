# UCSI_Subject_Team1

## 🚀 Project Execution Result  

![Project Execution Result](https://github.com/user-attachments/assets/6384ef0f-aad1-488f-b7fd-c60d31204f9f)

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

### 🚀 6. Start the Server
Run the following commands to start the server:
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
This setup process only needs to be done once after cloning the Git repository.


after next run server... 🤔

### etc. 🔄 After Initial Setup: Running the Server
Once the initial setup is complete, you can start the server using:
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Note: Make sure Docker is running before starting the server.

### etc2. 🛠️ Accessing the Database Inside Docker
To run DML commands (`SELECT`, `UPDATE`, `DELETE`, `INSERT`, etc.) inside the Dockerized database, use:
```
docker exec -it back-db-1 psql -U postgres -d project_db
```
And that's it! Your server should be up and running! 🚀

# Presentation

![ucsi_project_page-0001](https://github.com/user-attachments/assets/d08e217f-f20c-4141-98d0-6cdc71db360b)
![ucsi_project_page-0002](https://github.com/user-attachments/assets/02edae75-9bab-47af-b4f4-4b0a7dc99528)
![ucsi_project_page-0003](https://github.com/user-attachments/assets/97b0dc30-07ad-4abb-9d15-ff0273987117)
![ucsi_project_page-0004](https://github.com/user-attachments/assets/40836605-d974-4b2a-9878-a2d73d32e205)
![ucsi_project_page-0005](https://github.com/user-attachments/assets/3a2bd438-0d12-4cbd-b5f9-136e2f4fc431)
![ucsi_project_page-0006](https://github.com/user-attachments/assets/42d0afb5-d382-42cb-9889-2e85ce7370f2)
![ucsi_project_page-0007](https://github.com/user-attachments/assets/fabe3797-a339-4196-9338-4625962a7c9c)
![ucsi_project_page-0008](https://github.com/user-attachments/assets/b3423d23-ea3c-49c3-a524-8870e9ee1093)
![ucsi_project_page-0009](https://github.com/user-attachments/assets/b42f0d6f-c380-4ae1-a96d-611999b968b3)
![ucsi_project_page-0010](https://github.com/user-attachments/assets/963cb4da-fdf8-4c1a-9da0-6cb264395b8f)
![ucsi_project_page-0011](https://github.com/user-attachments/assets/2defb844-8b41-4b97-ad07-0b6d623f0e74)
![ucsi_project_page-0012](https://github.com/user-attachments/assets/fd388814-5949-44cd-858b-a0f474e14c14)
![ucsi_project_page-0013](https://github.com/user-attachments/assets/948b3956-44bb-4d41-93a2-4140eaf03383)
![ucsi_project_page-0014](https://github.com/user-attachments/assets/66a790bf-fe53-445f-91c2-b5252930e403)
![ucsi_project_page-0015](https://github.com/user-attachments/assets/4a589970-0147-4213-b7a9-df51782cb4e0)
![ucsi_project_page-0016](https://github.com/user-attachments/assets/4eca00f0-7911-4b66-8ccf-f13604e66fba)
![ucsi_project_page-0017](https://github.com/user-attachments/assets/ffdd14c6-5049-4fc0-a2f4-0e55cff181a1)
![ucsi_project_page-0018](https://github.com/user-attachments/assets/5f55eefb-9fa4-48bb-a3a2-899127e9e164)
![ucsi_project_page-0019](https://github.com/user-attachments/assets/25787df2-171b-465c-b9f5-a5b853964681)
![ucsi_project_page-0020](https://github.com/user-attachments/assets/016d90c1-14ca-4b08-ac82-9323d9356d21)
![ucsi_project_page-0021](https://github.com/user-attachments/assets/8408aefc-15c1-426d-84fb-60ea8f327507)
![ucsi_project_page-0022](https://github.com/user-attachments/assets/acef91c6-c0a5-430f-8e72-f9fa97ad7be8)
![ucsi_project_page-0023](https://github.com/user-attachments/assets/51459b55-be3f-4e69-bf08-8c59bb063b8f)
![ucsi_project_page-0024](https://github.com/user-attachments/assets/697bd660-341f-4db3-96be-270b21b01b9e)
![ucsi_project_page-0025](https://github.com/user-attachments/assets/bce882c7-9115-458c-ba60-fc5af715a3f6)
![ucsi_project_page-0026](https://github.com/user-attachments/assets/7ff72624-5fae-4c32-b7b3-4e64e56db977)
![ucsi_project_page-0027](https://github.com/user-attachments/assets/674b246f-7c05-4081-924f-942560494bfe)
![ucsi_project_page-0028](https://github.com/user-attachments/assets/51448fad-dd09-4e86-b5a0-151a8da7b964)
![ucsi_project_page-0029](https://github.com/user-attachments/assets/2561d1dd-d537-4214-9fe4-1a96ff432c3a)
![ucsi_project_page-0030](https://github.com/user-attachments/assets/8fb526ba-1dc7-46e9-92ff-0713097ba96c)



