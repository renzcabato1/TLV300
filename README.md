# Domain API

**Author:** Renz Christian Cabato – Fullstack Developer  

**Backend Stack:**  
- Node Js  
- Express Js  

**Front Stack:**  
- React Js

---

## 📌 Overview
This API allows you to handle domain-related requests through a simple REST interface.  
You can run it locally for development and testing purposes.

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone or Download the Repository
```bash
# Clone the repository
git clone https://github.com/renzcabato1/TLV300

# Navigate to the project folder
#go to terminal inside where to clone the project

#command for terminal
cd backend
copy .env.example .env #i will send the api key via Email "copy for windows cp for linux or mac"
npm install #to install all dependencies
npm run build # to build the project
npm start #start the backend The server will start on: http://localhost:5001


## 🔍 Testing the API

You can test the API using **Postman** 

POST http://localhost:4000/api/domain

**Request Body Example (JSON):**  
```json
{
  "domain": "example.com"
}