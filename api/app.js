import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/", routes);
app.use("/static", express.static("public"));

export default app;
