import * as z from "zod";


export const devisSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    company: z.string().optional(),
    phone: z.string().optional(),
    projectType: z.string({
      required_error: "Veuillez sélectionner un type de projet",
    }),
    budget: z.string().optional(),
    description: z.string().min(50, "La description doit contenir au moins 50 caractères"),
    file : z.string().optional(),
  });