// Thêm thư viện
import express from 'express';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// Nhận data thông qua req.body của API gửi lên
app.use(express.json());

const hostname = 'localhost';
const port = 3008;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const ADMIN_EMAIL_ADDRESS = 'thangpower@gmail.com';

// Khởi tạo đối tượng OAuth2Client với ClientID và Client Secret
const myOAuth2Client = new OAuth2Client(
    CLIENT_ID,
    CLIENT_SECRET
);

// Đặt Refresh Token vào trong đối tượng OAuth2Client để xử lý xác thực OAuth 2.0 
myOAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

// Tạo API /email/send
app.post('/email/send', async (req, res) => {
    try {
        // Lấy thông tin gửi lên từ client qua body
        const { email, subject, content } = req.body;
        if (!email || !subject || !content) {
            throw new Error('Làm ơn cung cấp email, chủ đề và nội dung!');
        }

        // Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
        // Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.       
        const myAccessTokenObject = await myOAuth2Client.getAccessToken();

        // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
        const myAccessToken = myAccessTokenObject?.token;

        // Tạo biến transport để gửi mail
        const transport = nodemailer.createTransport({
            // Cấu hình
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: ADMIN_EMAIL_ADDRESS,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: myAccessToken
            }
        });

        // mailOption là những thông tin gửi từ phía client thông qua API
        const mailOptions = {
            from: ADMIN_EMAIL_ADDRESS,
            to: email,
            subject: subject,
            html: `<h1>${content}</h1>`
        };

        // Gọi hành động gửi email
        await transport.sendMail(mailOptions);

        // Không có lỗi thì gửi về thành công
        res.status(200).json({ message: 'Gửi email thành công.' });
    } catch (err) {
        // Nếu có lỗi thì log ra để kiểm tra và gửi về Client
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, hostname)
