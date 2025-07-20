# 🛒 Ryuu - Full Stack E-Commerce Web Application

Ryuu is a modern full-stack e-commerce application built using the **MERN stack** and **Next.js**, featuring a complete **admin dashboard**, **customer interface**, **authentication system**, and **payment gateway** integration. The application is deployed on **AWS EC2** for real-time access and scalability.

---
You can check demo on live site - http://13.50.248.35/
## 🚀 Features

### 🧑‍💻 Frontend (Customer Interface)
- Home page with product listing
- Product detail view
- Shopping cart with quantity control
- Checkout flow
- Payment gateway integration (Stripe/Razorpay)
- Secure login and registration
- Session-based authentication using **NextAuth**
- Order confirmation and user dashboard

### 📊 Admin Dashboard
- Add/update/delete products
- View customer orders
- Real-time analytics and sales statistics
- Responsive dashboard UI
- Protected admin routes with role-based access

### 🔐 Authentication
- Secure session-based login with **NextAuth.js**
- JWT tokens for API route protection
- Admin vs user role support

### 📦 Backend API
- Built with **Express.js** & **MongoDB**
- RESTful endpoints for products, users, orders
- Token-based route protection (admin-only APIs)
- Error handling and validations

### ☁️ Deployment
- Hosted on **AWS EC2 (Ubuntu Server)**
- NGINX reverse proxy configured
- SSL-ready (if enabled)
- Process manager: **PM2** for background running
- `.env` variables for production environment

---

## 🛠️ Tech Stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | Next.js, React, Tailwind CSS |
| Backend   | Node.js, Express.js |
| Database  | MongoDB (Mongoose) |
| Auth      | NextAuth.js |
| Payment   | Stripe / Razorpay |
| DevOps    | AWS EC2, PM2, NGINX |

---

## 📸 Screenshots

| ![Customer Home](./screenshots/home.png) | ![Admin Dashboard](./screenshots/dashboard.png) |
|-----------------------------------------|-------------------------------------------------|

---

## 🔧 How to Run Locally

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev

<img width="1898" height="688" alt="image" src="https://github.com/user-attachments/assets/14244d97-8f05-4b1f-886f-aa8a0e5754bf" />
<img width="1891" height="976" alt="image" src="https://github.com/user-attachments/assets/af5cae2d-be86-4a51-89dd-20427a6c58b2" />
