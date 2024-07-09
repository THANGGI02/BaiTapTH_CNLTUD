//Nạp module http
const http = require('http');
const hostname ='localhost';
const port = 3000;
//Tạo server
const server = http.createServer((req, res)=>{
     //Trạng thái code, 200 là trạng thái thành công
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');
     res.end('<h1> Hello World </h1>');
})
server.listen(port, hostname);