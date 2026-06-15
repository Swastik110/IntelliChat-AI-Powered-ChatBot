# IntelliChat AI 🤖

A full-stack AI-powered chatbot built using the MERN Stack and Google's Gemini 2.5 Flash model. IntelliChat AI provides real-time conversational assistance for programming, technology, education, debugging, career guidance, and general knowledge queries through a modern and responsive user interface.

---

## 🚀 Features

* 🔐 User Authentication (JWT + Cookies)
* 🤖 AI Chat powered by Gemini 2.5 Flash
* 💬 Persistent Chat History
* 🗑️ Clear Conversation Functionality
* ⚡ Real-Time Responses
* 🎨 Modern Responsive UI
* 🔒 Protected Routes
* 📱 Mobile-Friendly Design
* 🌐 RESTful API Architecture
* 📝 Markdown & Code Response Support

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Material UI (MUI)
* React Router DOM
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication
* Cookie Parser

### Database

* MongoDB Atlas
* Mongoose

### AI Integration

* Google Gemini 2.5 Flash API

---

## 📂 Project Structure

```bash
IntelliChat-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── dist/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Swastik110/IntelliChat-AI-Powered-ChatBot.git
cd IntelliChat-AI
```

### 2. Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
COOKIE_SECRET=YOUR_COOKIE_SECRET
```

---

## ▶️ Running the Project

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

Application will be available at:

```bash
http://localhost:5173
```

---

## 🧠 How It Works

1. User authenticates using Signup/Login.
2. JWT token is generated and stored securely.
3. User sends a message through the chat interface.
4. Backend forwards the message to Gemini 2.5 Flash.
5. AI response is returned and stored in MongoDB.
6. Previous conversations remain accessible until deleted.

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-Stack MERN Development
* REST API Design
* Authentication & Authorization
* Database Modeling with MongoDB
* AI API Integration
* State Management in React
* Responsive UI Design
* TypeScript Development

---

## 👨‍💻 Author

**Swastik Ojha**

* GitHub: https://github.com/Swastik110
* LinkedIn: https://www.linkedin.com/in/swastik-ojha-84612a296/

---

## 📄 License

This project is licensed under the MIT License.

Copyright (c) 2026 Swastik Ojha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction, including the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
