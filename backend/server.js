import express from "express";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";

import connectDb from "./config/db.js";
const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log(`Server is running on post ${PORT}`);
});
