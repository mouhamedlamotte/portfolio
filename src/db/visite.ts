"use server";

import { prismaClient } from "@/lib/prisma.client";
import { getDateId } from "@/lib/utils";
import { VisitSchema } from "@/schemas/visitSchema";
import { z } from "zod";



export const addVisite = async (visitData: z.infer<typeof VisitSchema>) => {
      try {
        

        await prismaClient.visit.create({
          data: {
            ...visitData,
            dateID: getDateId(),
          },
        });
        return true;
      } catch (error) {
        console.error("Database Error:", error);
        return false;
      }
};
