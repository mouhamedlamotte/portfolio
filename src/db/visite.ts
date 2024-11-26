"use server";

import { prismaClient } from "@/lib/prisma.client";
import { VisitSchema } from "@/schemas/visitSchema";
import { z } from "zod";


export const addVisite = async (visitData: z.infer<typeof VisitSchema>) => {
      try {
        await prismaClient.visit.create({
          data: {
            ...visitData,
          },
        });
        return true;
      } catch (error) {
        console.error("Database Error:", error);
        return false;
      }
};
