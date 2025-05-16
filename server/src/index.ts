// server/src/index.ts
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import questionsRoute from "./routes/questions";
import authRoute from "./routes/auth";

import { connectDB } from "./db";










dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

connectDB();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/questions", questionsRoute);
app.use("/api/auth", authRoute);

app.get("/", (_req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`✨ Server running at http://localhost:${PORT}`);
});
