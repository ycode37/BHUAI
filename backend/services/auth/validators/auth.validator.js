import { z } from "zod";

export const loginSchema = z.object({
  token: z.string().min(1),
});
