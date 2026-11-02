import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use('/' , router)
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome To Sellora Server Auth" });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`);
  connectDB();
});
