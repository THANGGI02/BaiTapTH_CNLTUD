let express = require("express");
let multer = require("multer");
let path = require("path");
let hostname = 'localhost';
let port = 3000;
let app = express();

//Route này trả về file upload cho client
app.use(express.static(__dirname + '/views'));

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        //Định nghĩa nơi file upload sẽ được lưu lại
        callback(null, 'uploads/');
    },
    
    filename: function(req, file, callback) {
        //Nối thêm thời gian vào tên file để không bị trùng
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//Route này xử lý khi client thực hiện hành động upload file
app.post('/upload-files', (req, res) => {
    let upload = multer({ storage: storage}).array('upload_files', 10);
    console.log(!req.files);
    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        //Không có file ảnh khi bấm submit thì sẽ hiện ra thông báo này
        else if (!req.files) {
            return res.send('Vui lòng chọn các file để tải lên');
        }
        //Gửi lỗi nằm trong thư viện lỗi của  Multer để xử lý
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        //Các lỗi còn lại hiện ra cho client
        else if (err) {
            return res.send(err);
        }

        let result = "Bạn vừa tải lên các file này: <hr />";
        const files = req.files;
        let index, len;

        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Tải file khác lên</a>';
        res.send(result);
    });
});

app.listen(port, hostname);