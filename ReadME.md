# 🚀 Factorial Web App

A full-stack web application that calculates the factorial of a number using a **FastAPI backend** and a **React (Vite) frontend**.

---

## 📌 Features

* 🔢 Calculate factorial of any number
* ⚡ Fast API built with FastAPI
* 🎨 Modern UI using React + Vite
* 🌐 Ready for deployment on Render

---

## 🏗️ Project Structure

```
NEW/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│
├── Factorial/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── README.md
```

---

## ⚙️ Tech Stack

### Backend

* Python
* FastAPI
* Uvicorn

### Frontend

* React
* Vite
* JavaScript (ES6+)

---

## 🚀 Getting Started (Local Setup)

### 🔹 1. Clone the repository

```
git clone https://github.com/your-username/factorial-app.git
cd factorial-app
```

---

### 🔹 2. Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Run backend:

```
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### 🔹 3. Frontend Setup

```
cd Factorial
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoint

### POST `/factorial`

**Request:**

```
{
  "number": 5
}
```

**Response:**

```
{
  "factorial": 120
}
```

---

## 🌐 Deployment (Render)

### 🔹 Backend

* Service Type: Web Service
* Root Directory: `backend`
* Build Command:

```
pip install -r requirements.txt
```

* Start Command:

```
uvicorn main:app --host 0.0.0.0 --port 10000
```

---

### 🔹 Frontend

* Service Type: Static Site
* Root Directory: `Factorial`
* Build Command:

```
npm install && npm run build
```

* Publish Directory:

```
dist
```

---

## ⚠️ Important Notes

* Add CORS middleware in FastAPI
* Replace API URL in frontend after deployment
* Do not push:

  * `node_modules/`
  * `venv/`
  * `dist/`

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Sumit Soni**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
