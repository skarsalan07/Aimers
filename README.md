
<!-- Banner or Logo (optional) -->
<p align="center">
  <img src="https://your-logo-link.com/logo.png" alt="Aimers Logo" width="120" />
</p>

<h1 align="center">Aimers 🎯</h1>

<p align="center">
  <b>Your AI-Powered Virtual Interview Coach</b><br/>
  Personalized Mock Interviews · Smart Feedback · Resume Optimization · Custom Roadmaps
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/skarsalan07/aimers?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/github/stars/skarsalan07/aimers?style=for-the-badge" alt="Stars" />
  <img src="https://img.shields.io/github/issues/skarsalan07/aimers?style=for-the-badge" alt="Issues" />
</p>

---

## 💡 Overview

**Aimers** is an AI-driven platform that simulates technical interviews, analyzes user performance with NLP and ML models, and suggests personalized learning paths to boost placement readiness. Designed for students, freshers, and career switchers — Aimers helps you **practice smarter, not harder.**

---

## ✨ Features

- 🎤 **AI Mock Interviews** – Voice-based Q&A using Bi-LSTM + Attention for natural evaluation.
- 📄 **Resume Analyzer** – Improve your resume using AI-powered keyword matching and scoring.
- 📚 **Smart Roadmap Generator** – AI suggests custom learning paths based on your weak areas.
- 🤖 **Topic-Wise Interview Questions** – ML, DL, NLP, Web Dev, and DSA coverage.
- 📊 **Performance Tracking** – Visualize improvement across multiple mock interviews.
- 🔐 **Secure Authentication** – JWT-based signup/login system.

---

## 🛠 Tech Stack

| Layer         | Technologies                                                                 |
|---------------|------------------------------------------------------------------------------|
| **Frontend**  | React.js, JavaScript, HTML5, CSS3, Tailwind CSS / Bootstrap                  |
| **Backend**   | FastAPI, Python, Uvicorn, Pydantic                                           |
| **Database**  | MongoDB Atlas (NoSQL), Cassandra (via AstraDB support)                       |
| **AI/ML**     | Bi-LSTM, Attention, TF-IDF, Cosine Similarity, NLTK, Sentence Transformers   |
| **DevOps**    | GitHub Actions (CI), Netlify / GitHub Pages (Frontend), Render (Backend)     |

---

## 📁 Folder Structure

```bash
Aimers/
├── development/
│   ├── backend/
│   │   ├── auth/              # JWT authentication logic
│   │   ├── models/            # Pydantic models for API
│   │   ├── routes/            # API route definitions
│   │   └── main.py            # FastAPI entry point
│   └── frontend/
│       └── basic-ui/
│           ├── pages/         # React pages (home, login, etc.)
│           ├── components/    # Reusable UI components
│           └── App.js         # App root
├── README.md
├── .env.example
└── requirements.txt
```

---

## 🚀 Getting Started

### 📦 Backend Setup

```bash
cd development/backend
python -m venv venv
venv\Scripts\activate   # For Windows
# source venv/bin/activate  # For macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

### 🌐 Frontend Setup

```bash
cd ../../frontend/basic-ui
npm install
npm start
```
## 📊 APIs & Models

| Endpoint            | Description                          |
|---------------------|--------------------------------------|
| `/predict-interview`| NLP model to evaluate spoken/text answers |
| `/resume-review`    | NLP scoring and keyword matching     |
| `/roadmap`          | Generates personalized learning paths |
| `/auth/login`       | User login with JWT                  |
| `/auth/signup`      | New user registration                |

---

## 🧑‍💻 Contributing

We welcome contributions from the community! 🚀

```bash
git clone https://github.com/skarsalan07/Aimers.git
cd Aimers
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
```

---

## 👤 Author

**Arsalan Shaikh**  
AI & Data Science Student @ BATU  
📧 Email: arsalan.ai.dev@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/arsalan-shaikh)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
© 2025 Arsalan Shaikh. All rights reserved.

> _“Don't practice until you get it right — practice until you can't get it wrong. Aimers helps you do just that.”_
