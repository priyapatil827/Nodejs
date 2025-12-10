# 📌 Todos API (Express + JSON File)

This project is a simple **Todos API** built using **Node.js**, **Express**, and a local **JSON file** instead of MongoDB.  
It supports full **CRUD operations**, along with **filtering, searching, and updating** todos.

---

## 🚀 Features

- Create Todo  
- Get all Todos  
- Get Todo by ID  
- Update Todo  
- Delete Todo  
- Filter Todos by:
  - Status  
  - Title (Search)  
  - Due Date  

---

## 📁 Folder Structure

```
project-folder/
│── index.js
│── todo.json
│── README.md
```

---

## 🛠 Technologies Used

- Node.js  
- Express.js  
- File System (fs)  
- JSON file as database  

---

## ▶️ How to Run the Project

1. Install dependencies  
```bash
npm install
```

2. Start server  
```bash
node index.js
```

3. Server will run on:  
```
http://localhost:3000
```

---

## 📌 API Endpoints

### **1️⃣ Get All Todos (with filters)**
```
GET /todo
```

#### Query Filters:
| Filter | Example |
|--------|---------|
| status | /todo?status=completed |
| title | /todo?title=home |
| dueDate | /todo?dueDate=2025-01-10 |

---

### **2️⃣ Create a Todo**
```
POST /todo
```

#### Example Body:
```json
{
  "id": 1,
  "title": "Buy Groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending",
  "dueDate": "2025-01-12",
  "createdAt": "2025-01-10"
}
```

---

### **3️⃣ Update a Todo**
```
PUT /todo/:id
```

---

### **4️⃣ Delete a Todo**
```
DELETE /todo/:id
```

---

## 📺 Postman Testing Video

https://github.com/user-attachments/assets/40d12251-0bd6-48b4-9de2-7db931b7fd46








