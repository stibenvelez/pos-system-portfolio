import {io} from "socket.io-client";

let socket = io.connect(import.meta.env.VITE_BACKEND_URL);

export default socket;
