"use server";

import { prismaClient } from "@/lib/prisma.client";
import { z } from "zod";

// Définir le schéma Zod pour la validation des données
const visitSchema = z.object({
  ipAddress: z.string().optional(),
  country: z.string().optional(),
  region: z.string().optional(),
  deviceType: z.string().optional(),
  os: z.string().optional(),
  browser: z.string().optional(),
  language: z.string().optional(),
  referrer: z.string().optional(),
  visitedPage: z.string().min(1, "The visitedPage field is required."),
  sessionId: z.string().optional(),
  deviceId: z.number().optional(),
});

export const addVisite = async (visitData: unknown) => {
  try {
    // Valider les données avec Zod
    const validatedData = visitSchema.parse(visitData);

    // Créer l'entrée dans la base de données
    await prismaClient.visit.create({
      data: validatedData,
    });

    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation Error:", error.errors);
    } else {
      console.error("Database Error:", error);
    }
    return false;
  }
};
