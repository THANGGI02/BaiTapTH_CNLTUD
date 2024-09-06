const express = require('express');
const cat = require('./cat');
const hostname = 'localhost';
const port = 3002;
const app = express();

app.get('/', (req, res) => {
    let catsArr = ["Huynh Le Thanh Nha", "Ho Ngoc Thien Truong", "Tran Chi Thanh", "Ho Trong Tinh"," Le Van Thanh Long"];
    let randomCat = cat.getRandomCat(catsArr);
    res.send(`<h1>Cat: <small>${ randomCat }</small></h1><hr>`);
});

app.listen(port, hostname);