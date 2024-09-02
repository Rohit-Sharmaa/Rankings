import express from "express";
import authRouter from "./routes/auth.routes.js";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log(`Server is running on post ${PORT}`);
});
