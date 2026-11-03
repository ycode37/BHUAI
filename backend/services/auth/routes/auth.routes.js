import express from "express";
import { Glogin, logOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", Glogin);
router.get("/logout", logOut);

export default router;
