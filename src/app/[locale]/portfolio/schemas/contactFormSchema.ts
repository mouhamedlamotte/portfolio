import { z } from "zod";

export const ContactformSchema = z.object({
    id : z.string().optional(),
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
    visitId : z.string().optional()
  });