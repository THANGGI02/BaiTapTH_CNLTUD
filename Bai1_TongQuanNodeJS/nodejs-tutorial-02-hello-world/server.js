const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3001;
app.get('/', (req, res)=>{
    res.send('<h1> Nguyen Dang Toan Thang </h1>')

});app.listen(port, hostname);