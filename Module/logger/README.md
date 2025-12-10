# 📌 Node.js HTTP Server with Routing & Request Logging

This project is a simple Node.js HTTP server built using the native http and fs modules.
It handles multiple HTTP methods (GET, POST, PUT, DELETE) for different routes and logs every client request into a text file.

## 🚀 Features
🔹 Multi-Route Support

The server responds to the following routes:

/ (Home)

/about

/service

/portfolio

Each route supports:

GET

POST

PUT

DELETE

## 🔹 Request Logging

Every client request is logged in one.txt with:

URL visited

Request method

Timestamp

Client IP address

Example log entry:

client request on http://localhost:4040/about by GET at 9/12/2025 12:45:33 from this IP::1

## 📄 How It Works

Server is created using http.createServer().

Every incoming request is:

Logged using fs.appendFileSync().

Processed based on URL & HTTP method.

Appropriate text response is sent back to the client.

## ▶️ How to Run
1. Install Node.js

Make sure Node.js is installed on your machine.

2. Save the server file

Example filename: server.js

3. Run the server
node server.js

4. Open in browser

Visit:

http://localhost:4040

## 📂 File Structure
project/
│-- server.js
│-- one.txt       (automatically generated logs)

## 📝 Example Responses
Route	Method	Response Text
/	GET	Home Page – Get request
/about	POST	About Page – Post request
/service	PUT	Service Page – Put request
/portfolio	DELETE	Portfolio Page – Delete request

## ✔️ Notes
If an unknown route is visited, a 404 - page not found message is logged to console.
The project does not use any external frameworks (like Express).

If you want, I can generate:
✅ A better README
✅ Project folder structure
✅ Screenshots section
✅ Badges (Node.js version, license, etc.)



https://github.com/user-attachments/assets/590af874-7dcf-492c-9d8f-b304372f6b6b


