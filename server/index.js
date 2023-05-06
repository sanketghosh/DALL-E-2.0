import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import startServer from "./server.js";

dotenv.config();

const app = express();

import dalleRoute from "./routes/dalle.routes.js";
import postRoute from "./routes/post.routes.js";

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", dalleRoute);
app.use("/api/v1/dalle", postRoute);

/* app.get("/health-check", (req, res) => {
  res.json({ message: "Hello" });
}); */

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
startServer(app, port, mongoURI);
