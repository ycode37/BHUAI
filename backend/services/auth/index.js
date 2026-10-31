import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome To Sellora Server Auth" });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`);
  connectDB();
});
