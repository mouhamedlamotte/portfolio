"use server"

import { prismaClient } from "@/lib/prisma.client"

export const getMessageById = async (id: string) => {
    try {
        const res = await prismaClient.messages.findUnique({
            where: {
                id: id
            },
        })
        return res
    } catch (error) {
        console.error(error)
        return null
    }
}