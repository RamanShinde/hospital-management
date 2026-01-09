# hospital-management

# 🏥 Hospital Management System

A **full‑stack Hospital Management System** designed to manage core hospital operations such as authentication, appointments, and overall hospital workflows. This project is built using **Java (Spring Boot)** for backend microservices and **TypeScript‑based frontend** for user interaction.

This repository is mainly a **learning + real‑world practice project**, focusing on microservices, REST APIs, and full‑stack development.

---

## 📌 Project Overview

The Hospital Management System is divided into multiple modules/services, following a **microservices architecture**:

* **Auth Service** – Handles authentication and authorization
* **Appointment Service** – Manages appointments between doctors and patients
* **Hospital Management System (Core)** – Manages hospital‑level operations
* **Frontend Application** – User interface for interacting with backend services

---

## 🏗️ Architecture

```
hospital-management/
│
├── AuthService/                 # Authentication & Authorization Service
├── AppoitmentService/           # Appointment Management Service
├── HospitalManagmentSystem/     # Core Hospital Backend
├── hospitalApp/                 # Frontend Application (TypeScript)
│
├── .github/                     # GitHub workflows
├── .mvn/                        # Maven wrapper files
├── mvnw / mvnw.cmd              # Maven wrapper scripts
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

### 🔹 Backend

* **Java**
* **Spring Boot**
* **Maven**
* **REST APIs**
* **Microservices Architecture**

### 🔹 Frontend

* **TypeScript**
* **HTML / CSS**
* (Framework used can be Angular or similar)

### 🔹 Tools & Other

* Git & GitHub
* Docker (if configured)
* IntelliJ / VS Code

---

## ✨ Features

* User authentication (Login / Registration)
* Appointment scheduling
* Modular microservice‑based backend
* Frontend UI for hospital operations
* Separation of concerns between services

---

## 🚀 How to Run the Project

### 1️⃣ Backend Services

For each backend service (`AuthService`, `AppoitmentService`, `HospitalManagmentSystem`):

```bash
cd <service-folder>
./mvnw spring-boot:run
```

OR (Windows):

```bash
mvnw.cmd spring-boot:run
```

Make sure:

* Java is installed
* Maven wrapper is executable
* Database configuration (if any) is properly set

---

### 2️⃣ Frontend Application

```bash
cd hospitalApp
npm install
npm start
```

(Commands may vary based on frontend framework)

---

## 🧪 Testing

* Backend APIs can be tested using **Postman** or **Swagger UI**
* Frontend can be tested via browser

---

## 📚 Learning Goals of This Project

* Understand **microservices architecture**
* Learn **Spring Boot REST API development**
* Practice **frontend–backend integration**
* Improve GitHub project structuring
* Gain real‑world full‑stack development experience

---

## 🔮 Future Enhancements

* Role‑based access control (Admin / Doctor / Patient)
* Database integration with JPA & Hibernate
* Docker & Docker‑Compose setup
* API Gateway & Service Discovery
* Improved UI and validations

---

## 👨‍💻 Author

**Raman Shinde**
---

## 📄 License

This project is for **learning and educational purposes**.
