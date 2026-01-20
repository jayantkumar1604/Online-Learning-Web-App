📘 Online Learning Web App (PWA)

A Progressive Web Application (PWA) for online learning that provides students with a fast, secure, and responsive platform to access courses anytime, anywhere.
The system supports user authentication, course management, and dashboard-based learning, powered by a Spring Boot backend and interactive frontend.

🚀 Features

🔐 Secure login using Basic Authentication

📚 View available courses from database

📊 Interactive dashboard with live search

⚡ Fast & responsive UI

🌐 RESTful APIs using Spring Boot

🗄️ MySQL database integration

🧩 Modular backend architecture

📱 Can be extended to PWA (offline access)

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript (Fetch API)

Backend

Java 17

Spring Boot

Spring Security

Spring Data JPA (Hibernate)

Database

MySQL

Tools

IntelliJ IDEA

Git & GitHub

Postman

VS Code / Live Server

📂 Project Structure
Online-Learning-Web-App
│
├── frontend
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── app.js
│
├── backend
│   ├── controller
│   ├── model
│   ├── repository
│   ├── security
│   └── OnlineLearningBackendApplication.java
│
└── README.md

🔑 Authentication

This project uses HTTP Basic Authentication.

Default Credentials (for demo):

Username: admin
Password: admin123


Credentials are sent securely via request headers.

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/courses	Fetch all courses
POST	/api/auth/login	Login (optional extension)
▶️ How to Run the Project
Backend (Spring Boot)

Open backend project in IntelliJ IDEA

Configure MySQL database:

spring.datasource.url=jdbc:mysql://localhost:3306/online_learning
spring.datasource.username=root
spring.datasource.password=your_password


Run:

./gradlew bootRun


Backend runs on:

http://localhost:8080

Frontend

Open frontend folder

Run using Live Server or:

python3 -m http.server


Open browser:

http://127.0.0.1:5500/login.html

🧪 Testing API (Optional)

Using browser or Postman:

GET http://localhost:8080/api/courses
Authorization: Basic admin:admin123

📸 Screenshots

(Add screenshots of login & dashboard here)

📈 Future Enhancements

🔔 PWA offline support

🎥 Video lessons

🧠 AI-based course recommendations

📝 Online quizzes

📜 Certificate generation

🎥 Live classes

🎓 Academic Relevance

This project demonstrates:

Web application development

REST API design

Secure authentication

Full-stack integration

Real-world e-learning system design

👨‍💻 Author

Jayant Kumar
Computer Science Student
GitHub: jayantkumar1604
