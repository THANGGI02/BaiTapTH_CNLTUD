const express = require("express");
const multer = require("multer");
const path = require("path");
const helpers = require('./helpers');
const hostname = 'localhost';
const port = 3006;
const app = express();

//Route này trả về file upload cho client
app.use(express.static(__dirname + '/views'));

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //Định nghĩa nơi file upload sẽ được lưu lại
        cb(null, 'uploads/');
    },
    
    filename: function(req, file, cb) {
        //Nối thêm thời gian vào tên file để không bị trùng
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//Route này xử lý khi client thực hiện hành động upload file
app.post('/upload', (req, res) => {
    
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('picture');

    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        //Không có tải khi bấm submit thì sẽ hiện ra thông báo này
        else if (!req.file) {
            return res.send('Vui lòng chọn một file ảnh để tải lên');
        }
        //Gửi lỗi nằm trong thư viện lỗi của  Multer để xử lý
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        //Các lỗi còn lại hiện ra cho client
        else if (err) {
            return res.send(err);
        }
        res.send(`Đây là ảnh mà bạn vừa mới tải: <hr/><img src="${req.file.path}"><hr /><a href="./">Tải lên một ảnh khác/a>`);
    });
});

app.listen(port, hostname);