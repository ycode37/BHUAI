import express from "express";
import { Glogin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", Glogin);

export default router;
