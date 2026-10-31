import { cert, initializeApp } from "firebase-admin";
import serviceAccount from "../bhuai-4a275-firebase-adminsdk-fbsvc-3bc884c6cd.json" with { type: "json" };

export const app = initializeApp({
  credential: cert(serviceAccount),
});
