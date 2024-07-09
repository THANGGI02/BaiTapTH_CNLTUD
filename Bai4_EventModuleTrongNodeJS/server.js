const express = require('express');
const events = require('events');
const cat = express();
const EventEmitter = new events.EventEmitter();
const hostname = 'localhost';
const port = 3000;
const ringBell = () => {
    console.log("ring ring ring...");
}
//Lắng nghe sự kiện
EventEmitter.on("catRun",ringBell);
//Phát sự kiện
EventEmitter.emit("catRun");
cat.listen(port, hostname);