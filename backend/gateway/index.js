import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import protect from "./middleware/auth.middleware.js";
import { getCurrentUser } from "./controllers/user.controller.js";
dotenv.config();

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
const PORT = process.env.PORT;

app.use("/auth", proxy(process.env.AUTH_PORT));
app.get("/api/me", protect, getCurrentUser);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome To Sellora Server" });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT ${PORT}`);
});
