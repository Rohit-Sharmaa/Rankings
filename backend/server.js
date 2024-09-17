import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import codingProfiles from "./routes/codingProfiles.route.js";
import contestRoute from "./routes/contest.route.js";
import logger from "./utils/logger.js";
import morgan from "morgan";
const app = express();
const PORT = 8080;
const morganFormat = ":method :url :status :response-time ms ";
app.use(
  cors()
  // cors({
  //   origin: "http://localhost:3000",
  //   credentials: true,
  // })
);
dotenv.config();
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.trim().split(" ")[0],
          url: message.trim().split(" ")[1],
          status: message.trim().split(" ")[2],
          responseTime: message.trim().split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use("/api/auth", authRouter);
app.use("/api/profiles", codingProfiles);
app.use("/api/contest", contestRoute);

app.listen(PORT, () => {
  console.log(`Server is running on post http://localhost:${PORT}`);
});
