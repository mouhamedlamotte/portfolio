"use server"

import { ContactformSchema } from "@/app/portfolio/schemas/contactFormSchema";
import { prismaClient } from "@/lib/prisma.client";
import { z } from "zod";

export const addContact = async (contact: z.infer<typeof ContactformSchema>) => {
    try {
        await prismaClient.contact.create({data: contact})
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}