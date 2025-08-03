# 🧑‍💼 Mini LinkedIn Community Platform

The Mini LinkedIn Community Platform is a simplified social network app where users can register, log in, create posts, view a public feed, and explore profiles. It supports role-based access and mimics key LinkedIn features with a clean, responsive UI.

---

## 🌐 Live Demo

- **Frontend**: [https://mini-linkedin-community-platform-ha.vercel.app](https://mini-linkedin-community-platform-ha.vercel.app)  
- **Backend API**: [https://mini-linkedin-community-platform.onrender.com](https://mini-linkedin-community-platform.onrender.com)

---

## 🛠️ Stack Used

- **Frontend**: ReactJS, React Router DOM, Axios  
- **Backend**: Node.js, Express  
- **Database**: MongoDB Atlas  
- **Authentication**: JWT  
- **Hosting**: Vercel (Frontend), Render (Backend)  

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/BonagiriSahithya/mini-linkedin-community-platform.git
cd mini-linkedin-community-platform
````

---

### 2. Setup Backend

```bash
cd backend
npm install
```

* Create a `.env` file in the `backend` folder and add:

```env
PORT=10000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

* Start the backend server:

```bash
npm start
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

* Create a `.env` file in the `frontend` folder and add:

```env
REACT_APP_API_URL=https://mini-linkedin-community-platform.onrender.com/api
```

* Start the frontend development server:

```bash
npm start
```

---

## 👤 Demo User Logins

You can create your own users by registering via the frontend.
Admin/demo user roles can be manually set in the database if required.

---

## ✨ Extra Features (Optional)

* Role-based post deletion (only authors can delete their own posts)
* JWT-based secure authentication
* Responsive UI with clean components
* Separate profile page and public feed
* Full-stack deployment with free hosting services

---

## 📁 Folder Structure Overview

```
mini-linkedin-community-platform/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
└── README.md
```

---

## 📩 Contact

Created by **Bonagiri Sahithya**
GitHub: [https://github.com/BonagiriSahithya](https://github.com/BonagiriSahithya)

---

```

Let me know if you want help pushing this to your GitHub repo or attaching it for email submission.
```

