var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sinhviendaihocquynhon"
});

module.exports = con;

