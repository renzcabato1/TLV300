# Domain API

**Author:** Renz Christian Cabato – Fullstack Developer  

**Backend Stack:**  
- Node.js  
- Express.js  

**Frontend Stack:**  
- React.js  

---

## 📌 Overview
This API allows you to handle domain-related requests through a simple REST interface.  
It can be run locally for development and testing purposes.

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone or Download the Repository
```bash
# Clone the repository
git clone https://github.com/renzcabato1/TLV300
```

### 2️⃣ Navigate to the Backend Directory
```bash
cd backend
```

### 3️⃣ Setup Environment Variables
Copy the `.env.example` file to `.env`.  
For Windows:
```bash
copy .env.example .env
```
For macOS/Linux:
```bash
cp .env.example .env
```
> The API key will be sent via email — add it to your `.env` file.

---

### 4️⃣ Install Dependencies
```bash
npm install
```

### 5️⃣ Build the Project
```bash
npm run build
```

### 6️⃣ Start the Backend Server
```bash
npm start
```
The backend will start at:  
```
http://localhost:5001
```

---

## 🔍 Testing the API

You can test the API using **Postman**.

**Endpoint:**  
```
POST http://localhost:5001/api/domain
```

**Request Body Example (JSON):**
```json
{
  "domain": "google.com"
}
```

---

## 🖥 Frontend Setup Instructions

### 1️⃣ Navigate to the Frontend Directory
```bash
cd frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Frontend App
```bash
npm start
```
The frontend will run at:  
```
http://localhost:5000
```

---

## 📄 Notes
- Make sure your `.env` file is properly configured before running the server.
- Ensure the backend is running before making API requests.
- Backend and frontend are both located in the same project folder.
