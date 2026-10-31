import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/auth", proxy(process.env.AUTH_PORT));

app.get("/", (req, res) => {
  res.status(200).json({ sucess: true, message: "Welcome To Sellora Server" });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`);
});
