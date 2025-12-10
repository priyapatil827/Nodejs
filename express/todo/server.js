import http from "http";
import { fileURLToPath } from "url";
import express from "express";
import path from "path";
import fs from "fs";

const server = express();
server.use(express.json());
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "todo.json");

const readData = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const writeData = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

server.get("/todo", (req, res) => {
  let todos = readData();

  const { status, title, dueDate } = req.query;

  if (status) {
    todos = todos.filter(
      (todo) => todo.status?.toLowerCase() === status.toLowerCase()
    );
  }

  if (title) {
    todos = todos.filter((todo) =>
      todo.title?.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (dueDate) {
    todos = todos.filter((todo) => todo.dueDate === dueDate);
  }

  res.json(todos);
});

server.post("/todo", (req, res) => {
  let todos = readData();
  todos.push(req.body);
  writeData(todos);
  res.json(todos);
});

server.delete("/todo/:id", (req, res) => {
  let todos = readData();
  const id = req.params.id;

  todos = todos.filter((todo) => todo.id != id);
  writeData(todos);

  res.json(todos);
});

server.put("/todo/:id", (req, res) => {
  let todos = readData();
  const id = req.params.id;

  let index = todos.findIndex((todo) => todo.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos[index] = { ...todos[index], ...req.body };
  writeData(todos);

  res.json(todos[index]);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
