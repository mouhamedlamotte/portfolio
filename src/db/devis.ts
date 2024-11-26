'use server'

import { prismaClient } from "@/lib/prisma.client";
import { devisSchema } from "@/schemas/devisSchema";
import { z } from "zod";

export const addDevis = async (devisData: z.infer<typeof devisSchema>) => {
    try {
        await prismaClient.devis.create({
            data: {
                ...devisData,
            },
        });
        await prismaClient.contact.upsert({
            where: {
                email: devisData.email
            },
            update: {
                name    : devisData.name
            },
            create: {
                name    : devisData.name,
                email: devisData.email,
            }
        })
        return true;
    } catch (error) {
        console.error("Database Error:", error);
        return false;
    }
};