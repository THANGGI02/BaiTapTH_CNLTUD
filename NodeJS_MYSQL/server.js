var connection = require('./connection');
var express = require('express');
var app = express();
const port = process.env.port || 3011;
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'register.html'));
});

//Thêm dữ liệu vào bảng table account
app.post('/', function(req, res){
    var username = req.body.username;
    var pass = req.body.pass;
    var hoten = req.body.hoten;
    var your_email = req.body.your_email;

    var insertAccount = "INSERT INTO account(username, pass, hoten, your_email) VALUES('"+ username + "' , '"+ pass +"', '"+ hoten +"', '"+ your_email +"')";

    connection.query(insertAccount, function(err, result){
        if(err) throw err;
        res.send("Thêm tài khoản thành công")
    });
});

//Hiện thị dữ liệu của table account
app.get('/hienthiaccount', function(req, res){
    connection.connect(function(err){
        var selectAccount = "SELECT * FROM account";

        connection.query(selectAccount, function(err, result){
            if(err) throw err;
            res.send(result);
        });
    });
});

//Xóa dữ liệu của table account
app.get('/xoaaccount', function(req, res){
    connection.connect(function(err){
        var deleteAccount = "DELETE FROM account WHERE username = 'thang5504'";

        connection.query(deleteAccount, function(err, result){
            if(err) throw err;
            res.send("Xóa dữ liệu tài khoản thành công")
        });
    });
});

//Cập nhật dữ liệu của table account
app.post('/capnhataccount', function(req, res){
    var username = req.body.username;
    var pass = req.body.pass;
    var hoten = req.body.hoten;
    var your_email = req.body.your_email;

    var updateAccount = " UPDATE account SET(username ='"+ username + "' , pass = '"+ pass +"', hoten = N'"+ hoten +"', your_email = '"+ your_email +"')";

    connection.query(updateAccount, function(err, result){
        if(err) throw err;
        res.send("Cập nhật tài khoản thành công")
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});