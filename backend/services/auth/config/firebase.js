import { cert, initializeApp } from "firebase-admin";
import serviceAccount from "../bhuai-4a275-firebase-adminsdk-fbsvc-ecd39aadf1.json" with { type: "json" };

export const app = initializeApp({
  credential: cert(serviceAccount),
});
