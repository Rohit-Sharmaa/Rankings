import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import codingProfiles from "./routes/codingProfiles.route.js";
import contestRoute from "./routes/contest.route.js";

const app = express();
const PORT = 5000;

app.use(cors());

dotenv.config();
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/auth", authRouter);
app.use("/api/profiles", codingProfiles);
app.use("/api/contest", contestRoute);

app.listen(5000, () => {
  console.log(`Server is running on post ${PORT}`);
});
