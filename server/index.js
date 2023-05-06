import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import startServer from "./server.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

/* app.get("/health-check", (req, res) => {
  res.json({ message: "Hello" });
}); */

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
startServer(app, port, mongoURI);
