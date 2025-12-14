import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export const registerFormSchema = z.object({
  fullName: z.string().min(3),
  username: z.string().min(3),
  password: z.string().min(8),
});

export const projectFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(8, "Description must be at least 8 characters"),
});
