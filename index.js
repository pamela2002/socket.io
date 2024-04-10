const exp = require('constants');
const express = require('express');
const { Server } = require("socket.io");
const http = require('http');


const app = express();
const server = http.createServer(app);

const io = new Server(server);
io.on('connection', (socket) => {
    // console.log('A  New user has connected ', socket.id);
    socket.on("user-message", (message) => {
        // console.log("A new User Message",message);
        io.emit("message", message);
    })
});


app.use(express.static('./public'));

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html');
})

server.listen(9000, () => {
    console.log('Server started at PORT:9000');
});