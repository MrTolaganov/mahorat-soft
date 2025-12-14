import { ReactNode } from "react";
import { z } from "zod";
import {
  loginFormSchema,
  projectFormSchema,
  registerFormSchema,
} from "@/lib/validations";

interface ChildProps {
  children: ReactNode;
}

type LoginFormSchema = z.infer<typeof loginFormSchema>;
type RegisterFormSchema = z.infer<typeof registerFormSchema>;
type ProjectFormSchema = z.infer<typeof projectFormSchema>;
