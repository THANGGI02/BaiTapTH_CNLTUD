const http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = 'localhost';
const port = 3003;
const server = http.createServer((req, res)=>{
    let urlData = url.parse(req.url, true);
    let fileName = './views' + urlData.pathname;
    if(urlData.pathname === '/'){
        fileName = './views/index.html';
    }
    if(urlData.pathname === '/cat.html'){
        fileName = './views/cat.html';
    }
    if(urlData.pathname === '/dog.html'){
        fileName = './views/dog.html';
    }

    fs.readFile(fileName, (err, data)=>{
        if(err) throw err;
        res.writeHead(200, ('Content-Type', 'text/html'));
        res.write(data);
        return res.end();
    });
    
});
server.listen(port, hostname);