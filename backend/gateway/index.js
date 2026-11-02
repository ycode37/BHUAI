import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
const PORT = process.env.PORT;

app.use("/auth", proxy(process.env.AUTH_PORT));

app.get("/", (req, res) => {
  res.status(200).json({ sucess: true, message: "Welcome To Sellora Server" });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`);
});
