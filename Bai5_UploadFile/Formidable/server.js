const http = require("http");
const url = require('url');
const fs = require('fs');
const formidable = require('formidable');

const hostname = 'localhost';
const port = 3005;

const server = http.createServer((req, res)=>{
    if(req.url == "/upload" && req.method.toLowerCase() == "POST"){
        let form = new formidable.IncomingForm();
        form.uploadDir = "upload/";
        form.parse(req, (err, fileds, files)=>{
            if(err) throw err;
            let tmpPath = files.file.path;
            let newPath = form.uploadDir + files.file.name;

            //Đổi tên của file tạm thành tên mới và lưu lại
            fs.rename(tmpPath, newPath, (err)=> {
                if(err) throw err;
                switch (files.file.type) {
                    // Kiểm tra nếu như là file ảnh thì render ảnh và hiển thị lên.
                    case "image/jpeg":
                    fs.readFile(newPath, (err, fileUploaded) => {
                      res.writeHead(200,{"Content-type":"image/jpeg"});
                      res.end(fileUploaded);
                    });

                    break;
                    //Còn lại các loại file hiển thị up load thành công
                    default:
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(`Upload file <strong>${files.file.name}</strong> Upload file thành công`);
                    break;
                }
            });
        });
        return;
    }
    
    let urlData = url.parse(req.url, true);
    let fileName = './view' + urlData.pathname;
    if(urlData.pathname === '/'){
        fileName = './view/index.html';
    }

    fs.readFile(fileName, (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
});

server.listen(port, hostname);