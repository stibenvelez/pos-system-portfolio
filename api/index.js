import dotenv from "dotenv";
import app from "./app.js";
import { Server } from "socket.io";
import http from "http";
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
// Socket.io
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    socket.on("enviando_mensaje", (data) => {
        console.log("recibiendo del front", data);
        io.emit("respuesta", {
            data: data,
        });
    });

    socket.on("createdProduct", () => {
        io.emit("loadProducts");
    });
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
});
