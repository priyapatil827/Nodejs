import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    const date = new Date();
    const log = `client request on http://localhost:4040${req.url} by ${req.method} at ${date.getDate}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} from this IP:${req.socket.remoteAddress}\n`;
    fs.appendFileSync("one.txt",log);

    if(req.url === '/' && req.method =='GET')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home Page-Get request");
    }
    else if(req.url === '/' && req.method =='POST')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home Page-Post request");
    }
    else if(req.url === '/' && req.method =='PUT')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home Page-Put request");
    }
    else if(req.url === '/' && req.method =='DELETE')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home Page-Delete request");
    }
    else if(req.url === '/about' && req.method =='GET')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("About Page-Get request");
    }
    else if(req.url === '/about' && req.method =='POST')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("About Page-Get request");
    }
    else if(req.url === '/about' && req.method =='DELETE')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("About Page-Delete request");
    }
    else if(req.url === '/service' && req.method =='GET')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Service Page-Get request");
    }
    else if(req.url === '/service' && req.method =='PUT')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Service Page-Put request");
    }
    else if(req.url === '/service' && req.method =='DELETE')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Service Page-Delete request");
    }
    else if(req.url === '/portfolio' && req.method =='GET')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Portfolio Page-Get request");
    }
    else if(req.url === '/portfolio' && req.method =='POST')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Portfolio Page-Post request");
    }
    else if(req.url === '/portfolio' && req.method =='PUT')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Portfolio Page-Put request");
    }
    else if(req.url === '/portfolio' && req.method =='DELETE')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Portfolio Page-Delete request");
    }
    else
    {
        console.log("404-page not found");
    }
});

server.listen(4040,()=>{
    console.log("server started");
})