# SIH1779 Voice Control Game for Education

## 🎮 Overview

**Voice Control Game for Education** is a web-based educational game platform designed to help users engage through **voice commands**. It includes two interactive games:
- **Quiz Game**: Answer questions using your voice.
- **Memory Recall Game**: Test and improve your memory with fun, voice-enabled gameplay.

Authentication is secured using **Google Login** and an **OTP-based verification system**.

---

## 🚀 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**:
  - Google Sign-In via Firebase Auth
  - Email OTP verification using Nodemailer

---

## 🔐 Features

- 🎤 **Voice Command Controls**
- 🧠 **Quiz & Memory Recall Games**
- 🔒 **Secure Authentication** with Google Login + OTP
- 👤 **User Roles and Access Control**
- 📊 **Game Progress Tracking** *(optional)*
- ☁️ **MongoDB Integration** for persistent data

---

## 🧱 Project Structure
```
Voice-Control-Game/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js     # Handles authentication logic
│   │   ├── gameController.js     # Manages game-related operations
│   │   └── voiceController.js    # Processes voice commands
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Quiz.js               # Quiz game schema
│   │   └── Memory.js             # Memory game schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── gameRoutes.js         # Game routes
│   │   └── voiceRoutes.js        # Voice command routes
│   ├── services/
│   │   ├── otpService.js         # OTP generation and verification
│   │   └── emailService.js       # Email sending logic
│   ├── utils/
│   │   └── validators.js         # Input validation functions
│   ├── .env                      # Environment variables
│   ├── server.js                 # Entry point of the backend
│   └── package.json              # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html            # HTML template
│   ├── src/
│   │   ├── assets/               # Images and static assets
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Page components (Home, Quiz, Memory, etc.)
│   │   ├── services/             # API calls
│   │   ├── context/              # React Context for state management
│   │   ├── hooks/                # Custom React hooks
│   │   ├── App.js                # Root component
│   │   └── index.js              # Entry point of the frontend
│   ├── .env                      # Environment variables
│   ├── package.json              # Frontend dependencies
│   └── vite.config.js            # Vite configuration
├── .gitignore                    # Files and folders to ignore in Git
├── README.md                     # Project documentation
└── package.json                  # Root package file (if managing both frontend and backend together)
```

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB instance (local or cloud)
- Firebase project with Google Auth enabled
- Gmail App Password (for OTP email delivery)

---

### 📦 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SMTP_USER=your_gmail_address
SMTP_PASS=your_gmail_app_password
```

4. Start the backend server:

```bash
npm start
```

### 💻 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

4. Start the frontend development server:

```bash 
npm run dev
```



### 🔐 Authentication Flow
User logs in via Google Sign-In.

An OTP is sent via Gmail to the verified email.

On successful OTP verification, access is granted to the game dashboard.

