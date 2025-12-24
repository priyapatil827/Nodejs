# 🐦 Mini Twitter CRUD App (React + Express)

This project is a simple Twitter-style application that allows users to create, read, update, and delete tweets. It is built using:

Frontend: React

Backend: Node.js + Express

Storage: JSON file (two.json) instead of a database

The UI includes a sidebar, tweet feed, and right panel similar to Twitter, along with full CRUD functionality through REST APIs.

## ✨ Features

➕ Add new tweet

✏️ Edit existing tweet

🗑️ Delete tweet

📜 View all tweets

📁 Data stored in two.json file

🔄 Real-time UI update using Axios

🎨 Clean responsive UI components

## 🧩 Tech Stack
~Frontend

React

Axios

React Icons

CSS modules

~Backend

Node.js

Express

CORS

FS module for file handling

## 🚀 How It Works
~Frontend

Thome.jsx handles:

form inputs

posting tweets

editing tweets

deleting tweets

displaying tweet list

SideBar.jsx and RightPanel.jsx render the UI layout

~Backend API Endpoints

Method	Endpoint	Description

GET	/	Get all tweets

POST	/	Add new tweet

PUT	/:id	Update tweet by id

DELETE	/:id	Delete tweet by id

Data is read and written to two.json using Node’s fs module.

## ⚙️ Installation & Setup
1️⃣ Clone repository
git clone <repo-url>
cd project-folder

2️⃣ Install backend dependencies
npm install

3️⃣ Run backend
node server.js


Server runs at:

http://localhost:3400

4️⃣ Install React app dependencies
npm install

5️⃣ Start React app
npm start

## 📂 JSON File Storage

Tweets are stored in:

two.json


Each tweet has:

{
  
  "id": 1,
  
  "title": "Sample title",
  
  "twitts": "Sample tweet text"

}

## 🛡️ Error Handling

invalid JSON handled safely

try–catch used in controllers

meaningful messages returned from server

## 👍 Future Enhancements

authentication & login

like/comment system

MongoDB database

image upload

dark mode UI



