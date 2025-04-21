import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 5000});

wss.on('connection', (socket) => {
   console.log("socket connection detected")
    socket.on("message", (data) => {
        socket.send("message from wss")
    });
});