import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.routes.js";
import {z} from 'zod'
dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("8000"),
  MONGO_URI: z.string({ required_error: "MONGO_URI is missing in .env" }),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Configuration Error: Invalid environment variables:");
  process.exit(1);
}
const config = result.data;




const app = express();
app.use(
  express.json({
    limit: "10kb",
  }),
);
const PORT = process.env.PORT;

app.use("/", router);
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Welcome To Sellora Server Auth" });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.PORT, () => {
      console.log(`Auth Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
    process.exit(1);
  }
};

startServer();
