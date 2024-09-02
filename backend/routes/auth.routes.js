import express from "express";
const router = express.Router();

router.get("/info", (req, res) => {
  res.status(201).json("I am auth router file");
});

export default router;
