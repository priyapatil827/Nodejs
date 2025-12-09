import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    const date = new Date();
    res.writeHead(201,{"content-type":"text/plain"});
    fs.appendFileSync("logger.txt","\nA request was made at "+date.toISOString());

    res.end("Hello from Node.js Server!");
});

server.listen(4040,()=>{
    console.log("server started successfully");
});