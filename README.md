# BÀI TẬP THỰC HÀNH MÔN CÔNG NGHỆ LẬP TRÌNH

## BÀI 1: TỔNG QUAN NODEJS
- Cú pháp:
  + Khởi tạo một project node: npm init --y
  + Chạy lệnh: npm start
  + Cài đặt express: npm install express --save

## BÀI 2: MODULE TRONG NODEJS
- Khái niệm: 
  + Là các đoạn code được đóng gói lại với nhau và được giữ Private
  + Chỉ các hàm và biến được định nghĩa bên trong Module là có thể truy cập và thao tác với nhau
  + Khi sử dụng Module từ bên ngoài thì chúng ta sẽ chìa các API là các biến, các hàm hoặc cả 2 biến
  + Hàm ra bên ngoài bằng cách sử dụng đối tượng exports hoặc module.exports

## BÀI 3: HTTP, URL, FILE SYSTEM MODULES TRONG NODEJS
1) HTTP module:
   - Khái niệm: Là module cho phép Nodejs truyền dữ liệu qua giao thức http
   - Chức năng: tạo một máy chủ HTTP lắng nghe các cổng kết nối trên đó và trả lời lại cho máy máy khách(client)
   - Phương thức: 
     + createServer(): tạo một máy chủ HTTP
       - Trong phương thức createServer() có 2 tham số:
         + req viết tắt của request là biến chứa các thông tin mà Client truyền lên Server
         + Phương thức:
           - req.url(): thuộc tính này chứa các phần tử phía sau tên miền của bạn
         + res viết tắt của response là biến chưa các thông tin mà Server trâ về cho Client
         + Phương thức:
           - res.writeHead(): định nghĩa kiểu dữ liệu trả về
           - res.write(): Thiết lập nội dung mà sever muốn trả về cho client

2) URL module:
   - Chức năng: 
     + Chia nhỏ dịa chỉ trang web thành các phần có thể đọc được
     + Phục vụ cho nhiều tác vụ cần lấy dữ liệu từ url

3) FS(file system) module:
   - Khái niệm: Cho phép làm việc với các file ở trên máy tính
   - Chức năng: 
     + Tạo file 
     + Đọc file
     + Cập nhật file
     + Đổi tên file
     + Xóa file

   - Phương thức:
     + writeFile(): Tạo file
     + readFile(): Đọc file
     + appendFile(): Cập nhật file
     + rename(): Đổi tên file

## BÀI 4: EVENT MODULE TRNG NODEJS
1) Khái niệm: 
   - Cho phép bạn lắng nghe các sự kiện và gán các hành động để chạy khi nhứng sự kiện đó xảy ra

2) Các phương thức: 
   - addListener(event, listener)
     + Thêm một listener vào phía cuối của mảng listeners cho sự kiện.
     + Phương thức này không kiểm tra rằng listener này đã từng được thêm vào hay chưa.

   - on(event, listener)
     + Phương thức này chính xác là giống 100% với phương thức addListener

   - once(event, listener)	
     + Thêm một listener vào mảng listeners của sự kiện được chỉ định. 
     + Nhưng listener này chỉ được gọi 1 lần khi sự kiện xẩy ra. Sau đó nó bị loại bỏ ra khỏi mảng.

   - removeListener(event, listener)	
     + Loại bỏ một listener ra khỏi mảng listeners của sự kiện được chỉ định.
     + Nếu một listener đã được thêm vào mảng này nhiều lần, để loại bỏ hết listener này bạn cần phải gọi phương thức này nhiều lần.

   - removeAllListeners([event])	
     + Loại bỏ tất cả các listener, hoặc loại bỏ tất cả các listener của một sự kiện được chỉ định.

   - setMaxListeners(n)	
     + Theo mặc định, EventEmitter sẽ in ra cảnh báo nếu có nhiều hơn 10 listener được thêm vào cho một sự kiện cụ thể. Đây là một mặc định hữu ích giúp tìm ra các rò rỉ bộ nhớ (memory leaks). Bạn có thể thiết lập một con số khác, hoặc thiết lập là 0 nếu bạn muốn nó không giới hạn (unlimited).

   - listeners(event)	
     + Trả về một mảng các listener cho sự kiện được chỉ định.

   - emit(event,[arg1], [arg2], [...])	
     + Thực thi lần lượt từng listener trong mảng, với các tham số. Trả về true nếu mảng có ít nhất một listener, ngược lại trả về false.

## BÀI 5: UPLOAD FILES
1) Formidable
   - Khái niệm: Là một module giúp phân tích dữ liệu biểu mẫu, tập trung vào việc tải lên các tệp tin
   - Thư viện: formidable
   - Ưu điểm:
     + Non-buffering multipart parser: Tốc độ cao, lên tới xấp xỉ 500mb/giây và không cần bộ nhớ đệm cho việc phân tích cú pháp.
     + Automatically writing file uploads to disk: Tự động ghi lại các tập tin tải lên.
     + Graceful error handling: Cú pháp bắt lỗi & xử lý lỗi dễ dàng.
     + Low memory footprint: Có thể hiểu đơn giản là thư viện này tiêu tốn ít Ram.
     + Very high test coverage: Thư viện này đã được viết test rất cẩn thận
   - Cài đặt module: npm install --save formidable
 
2) Multer
   - Khái niệm: Multer là một middleware cho Express và Nodejs giúp dễ dàng xử lý dữ liệu multipart/form-data khi người dùng upload file.
      Chú ý: Multer sẽ không xử lý bất kỳ form nào ngoài multipart (multipart/form-data).
   - Thư viện: multer.
   - Cài đặt module: npm install --save nulter.

## BÀI 6: UPLOAD FILES   

## BÀI 7: GỬI EMAIL
1) Triển khai Code ứng dụng gửi email với OAuth2 kết cùng Nodemailer:
   - Tạo file và tạo 4 biến để lưu các giá trị phục vụ cho việc gửi email:
     + CLIENT_ID = ...
     + CLIENT_SECRET = ...
     + REDIRECT_URL = ... 
     + REFRESH_TOKEN = ...

   - Đăng nhập tài khoản:
     + B1: Đăng nhập vào đường link: https://console.cloud.google.com
     + B2: Đăng nhập tài khoản google 

   - Tạo một project:
     + B3: Chọn Select a project
     + B4: Chọn New Project
     + B5: Nhập tên Project
     + B6: Nhấn Create

   - Tạo thông tin xác thực:
     + B7: Về trang Dashboard
     + B8: Chọn APIs & Services
     + B9: Chọn Credentials
     + B10: Chọn Create Credentials

   - Cáu hình màn hình đồng ý OAuth(OAuth consent screen)
     + B11: Chọn OAuth client ID
     + B12: Chọn Configure Consent screen
       - Internal: Cho phép người dùng trong tổ chức Google Workspace của bạn sử dụng ứng dụng này
       - External: Cho phép bất kì người dùng nào có tài khoản Google sử dụng ứng dung của bạn
     + B13: Chọn User Type là External
     + B14: Chọn Create

   - Điền thông tin chi tiết cho màn hình đồng ý
     + B15: Điền thông tin chi tiết  
       - B1: Nhập tên app
         // App name: tên ứng dụng sẽ hiển thị cho người dùng khi họ được yêu cầu cấp quyền
       - B2: Nhập User support email
         // User support email: Địa chỉ email hỗ trợ người dùng 
       - B3: Điền app domain:
         // Application Homepage link: Liên kết đến trang chủ của ứng dụng (không bắt buộc).
         // Application Privacy Policy link: Liên kết đến chính sách bảo mật của ứng dụng (bắt buộc).
         // Application Terms of Service link: Liên kết đến điều khoản dịch vụ của ứng dụng (không bắt buộc).
       - B4: Điền Authorized domains
         // Thêm các tên miền được ủy quyền cho ứng dụng của bạn. Các tên miền này phải thuộc về bạn hoặc bạn có quyền kiểm soát.
       - B5: Điền Email addresses vào Developer contact information
       - B6: Các bước (Scopes) – (Test Users) – (Summary) thì không cần điền gì và nhấn Save and Continue
       - B7: Nhấn Back To Dashboard.
      
   - Thêm email người dùng để test
     + B16: Chọn APIs & Services
     + B17: Chọn OAuth consent screen
     + B18: Chọn ADD USERS vào mục Test users
     + B19: Thêm email cần test

   - Tạo thông tin xác thực
     + B20: Tạo thông tin xác thực
       - B1: Chọn Credentials
       - B2: Chọn Create Credentials
       - B3: Chọn OAuth client ID
       - B4: Chọn thể loại ứng dụng, là Web application
       - B5: Điền thông tin chi tiết
         + B1: Đặt tên name
         + B2: Nhập Authorized JavaScript origins thì để trống(trong thực tế có thể set url trang web dùng để call api vào đây)
               VD: https://yourapp.com
               VD: https://www.yourapp.com
         + B3: Nhập Authorized redirect URIs
               VD: https://developers.google.com/oauthplayground (mục đích là dùng oauthplayground của google để tạo Refresh Token.)
       - B6: Tạo OAuth Client ID

   - Lưu lại id của client và mật khẩu.
     + B21: Lưu lại Client ID và Client Secret trong file .env
         Chú ý quan trọng: 2 cái Client ID và Client Secret phải được giữ bảo mật tuyệt đối, trong dự án thực tế thường sẽ cho vào biến môi trường ENV)
     + B22: Copy Client ID và Client Secret bỏ vào code của minh có tên biến lần lượt là CLIENT_ID và CLIENT_SECRET.

   - Chỉ định tài khoản google mà chúng ta sẽ dùng để gửi email
     + B23: Tạo mã Refresh Token 
       - B1: Nhấp vào đường link https://developers.google.com/oauthplayground
       - B2: Copy đường link trên rồi bỏ vào biến có tên là REDIRECT_URL trong file .env
       - B3: Chọn Setting
       - B4: Tích vào Use your own OAuth credenticals
       - B5: Copy Client ID và Client Secret 
       - B6: Close

   - Chọn và ủy quyền APIs
     + B24: Nhập https://mail.google.com vào ô Input your own scopes
     + B25: Nhấn Authorize APIs
     + B26: Chọn địa chỉ email của bạn
       Lưu ý: Đây sẽ là địa chỉ email lát chúng ta sẽ code để gửi email gọi là Admin Email
     + B27: Nhấn Continue

   - Trao đổi mã ủy quyền lấy token
     + B28: Tích vào nút checkbox Auto-refresh the token before it expires
     + B29: Nhấn vào Exchange authorization code for tokens
     + B30: Lưu lại Refresh token
     + B31: Copy Resfresh Token bỏ vào code của minh có tên biến là REFRESH_TOKEN trong file .env
  
   - Câu hình yêu cầu cho API: Bước này không quan trọng có thể bỏ qua

2) Code ứng dụng gửi email
   - Khởi tạo thư mục: npm init --y 
   - Thêm thư viện: npm install express
   - Thêm thư viện: npm install nodemailer google-auth-library  
   - Thêm thư viện: npm i dotenv --save
     + Chú ý: Muốn sử dụng phương thức import thay cho require thì phải thêm "type": "module" trong file package.json

3) Postman
   - Tải postman: https://www.postman.com/downloads/
   - Tạo một yêu cầu mới:
     + B1: Mở Postman và nhấn vào nút + để tạo một tab yêu cầu mới
     + B2: Chọn Rest API basic CRUD, test & variable
     + B3: Chọn phương thức Post data
     + B4: Nhập http://localhost:3000/email/send vào ô Enter URL or paste text   
     + B5: Nhấn qua thẻ Body
     + B6: Code các thông tin để gủi email:
       {
        - "email": "thangnguyengotowok@gmail.com",
        - "subject": "Lab 7: Send Email",
        - "content": "Xin chào, tôi là Thắng"
       }
     Chú ý: Nhớ kiểm tra REFRESH_TOKEN có còn thời gian sử dụng không
     + B7: Nhấn nút Send
     + B8: Kiểm tra email

## Bài 8:Quan sát, lắng nghe những hành động của một Thư mục, Tập tin
1) Thư viện: chokidar
   Chú ý: Thư viện fs-extra cũng giống module fs nhưng nó hỗ trợ cho chúng ta viết code xử lý bất đồng bộ với cú pháp async-await
2) Cú pháp: npm i --save chokidar
   Chú ý: npm i --save fs-extra

## Bài 9: Sử dụng JWT
1) Khái niệm:
   - JWT là một cổng giao tiếp giữa client và server, bản chất của nó là một token
   - Bao gồm:
     + Header:
       - Thuật toán: Dùng để mã hóa chuỗi token (Mặc định: HS256)
       - Thể loại của token
         VD: {
              "typ": "JWT",
              //typ(type) là kiểu Token, ở đây là chính la JWT
              "alg": "HS256"
              //alg(algorithm) là thuật toán băm tạo ra chữ kí cho Token 
             }

     + Payload: Là phần thông tin muốn gửi đi 
        VD: {
             "userID:": "4451050973",
             "username": "NGUYEN DANG TOAN THANG",
             "job:" Student,
              //Standard Fields (Trường tiêu chuẩn)
             "iss": "Trung Quan, author of blog: https://trungquandev.com",
              //iss(Issuer): là thông tin người tạo ra Token(tên hệ thống backend)
             "iat": 1568456819,
              //iat(Issued at): nhãn thời gian lúc token được tạo
             "exp": 1568460419
              //exo(Expiration time): thời gian hết hạn của Token
            }
     + Signature: Chữ kí
       VD:
           const data = base64urlEncode(header) + “.” + base64urlEncode(payload);
           const hashedData = Hash(data, secret);
           const signature = base64urlEncode(hashedData) 

    - Các phần được ngăn cách nhau bởi dấu "."

 2) Tải thư viện
    - JWT:  npm install jsonwebtoken
    - Cookie-parser: npm install cookie-parser giúp đọc được cookie gửi lên server

 3) Cách tạo một mã JWT
    VD: var jwt = require("jsonwebtoken");
        //Tạo token
        const createJWT = (){
          let payload = {name: "Thắng Nguyễn", address: "Quy Nhơn, Bình Định"};
          let key = "THANg13425675504!";
          let tokenTN = null
          //Bắt lỗi
          try{
              tokenTN = jwt.sign(payload, key);
          }catch(err){
              console.log(err)
          }
          return tokenTN;
        }
        //Giải mã token
        const verifyToken = (token) => {
          let key = "THANg13425675504!";
          let data = Null;
 
          try{
            let decodee = jwt.verify(token, key); 
          }catch(err){
            console.log(err);
          }
          return data;
        }

        //Test JWT
        createJWT();
        let decodeData = verifyToken("")
        console.log(decodeData) 
        
## Bài 10: MYSQL & NODEJS
1) Thư viện: mysql 
2) Cú pháp: npm install mysql
3) Các bước tạo kết nối là:
   - Cú pháp:
     + npm init --y
     + npm install express --save
     + npm install mysql
   - Đăng nhập vào tạo dữ liệu
     + B1: Bật Wampserver64
     + B2: Đăng nhập vào phpMyAdmin có địa chỉ: http://localhost/phpmyadmin/
       - Username: root
       - password: 
       - Server choice: MYSQL
     + B3: Nhấn vào nút Log in    
     + B4: Tạo cơ sở dữ liệu
       - B1: Chọn New
       - B2: Nhập tên Database
         VD: ĐIEMTHIVAOTRUONGTHPTTRUNGVUONG
       - Nhấn vào nút Create

