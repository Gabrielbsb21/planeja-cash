import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  passowrd: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
// password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
