import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(5000, () => {
  console.log(`Server is running on post ${PORT}`);
});
