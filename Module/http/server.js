import http from "http";
import fs from 'fs'

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/service") {
    res.writeHead(200, { "content-type": "text/html" });
    const data = fs.readfileSync("index.html", "utf-8");
    res.end(data);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`your server is started on http://localhost:${PORT}/`);
});
