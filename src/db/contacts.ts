"use server"

import { ContactformSchema } from "@/app/portfolio/schemas/contactFormSchema";
import { prismaClient } from "@/lib/prisma.client";
import { z } from "zod";

export const addContact = async (contact: z.infer<typeof ContactformSchema>) => {
    try {
        const res = await prismaClient.contact.upsert({
            where: {
                email: contact.email
            },
            update: {
                name    : contact.name
            },
            create: {
                name    : contact.name,
                email: contact.email,
            },
            select: {
                id: true
            }
        })
        await prismaClient.messages.create({data: {
            ...contact,
            contactId: res.id
        }})
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}


export const getContacts = async () => {
    try {
        const res = await prismaClient.contact.findMany()
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getMessages = async () => {
    try {
        const res = await prismaClient.messages.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

