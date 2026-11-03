import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js";
import User from "../models/user.model.js";
import redis from "../../../shared/redis/redis.js";

export const Glogin = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = await getAuth(app).verifyIdToken(token);

    let user = await User.findOne({ firebaseUid: decoded.uid });
    if (!user) {
      user = await User.create({
        fireBaseUid: decoded.uid,
        email: decoded.email,
        name: decoded.name,
        image: decoded.picture,
      });
    }

    const sessionId = crypto.randomUUID();

    // Store session in Redis (expires in 7 days)
    await redis.set(
      `session-${sessionId}`,
      JSON.stringify({
        userId: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
      }),
      "EX",
      7 * 24 * 60 * 60,
    );

    // Set cookie with correct camelCase 'sameSite' and 'lax' for multi-port local dev
    res.cookie("session", sessionId, {
      httpOnly: true,
      secure: false, // Set to true ONLY if using HTTPS in production
      sameSite: "lax", // Must be camelCase, "lax" allows cross-port cookies locally
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error("Login Error:", error);
    return res
      .status(500)
      .json({ success: false, message: `Login Failed ${error.message}` });
  }
};
export const logOut = async (req, res) => {
  try {
    const sessionId = req.cookies?.session;
    if (sessionId) {
      await redis.del(`session-${sessionId}`);
    }
    res.clearCookie("session");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res
      .status(500)
      .json({ success: false, message: `Logout Failed ${error.message}` });
  }
};
