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
2️⃣ Navigate to the Backend Directory
bash
Copy
Edit
cd backend
3️⃣ Setup Environment Variables
Copy the .env.example file to .env.
For Windows:

bash
Copy
Edit
copy .env.example .env
For macOS/Linux:

bash
Copy
Edit
cp .env.example .env
The API key will be sent via email — add it to your .env file.

4️⃣ Install Dependencies
bash
Copy
Edit
npm install
5️⃣ Build the Project
bash
Copy
Edit
npm run build
6️⃣ Start the Backend Server
bash
Copy
Edit
npm start
The backend will start at:

arduino
Copy
Edit
http://localhost:5001
🔍 Testing the API
You can test the API using Postman.

Endpoint:

bash
Copy
Edit
POST http://localhost:4000/api/domain
Request Body Example (JSON):

json
Copy
Edit
{
  "domain": "example.com"
}