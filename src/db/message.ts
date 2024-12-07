"use server"

import { MessageType } from "@/app/[local]/admin/messages/types/message"
import { kdebug } from "@/lib/kdebug"
import { prismaClient } from "@/lib/prisma.client"





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

export const updateMessage = async (id: string, data: MessageType) => {
    try {
        const res = await prismaClient.messages.update({
            where: {
                id: id
            },
            data: {
                ...data
            }
        })
        return res
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getReplyByMessageId = async (id: string) => {
    try {
        const res = await prismaClient.replies.findMany({
            where: {
                messageId: id
            }
        })
        return res
    } catch (error) {
        kdebug(error)
        return null
    }
}


export const addReply = async (data: {
    messageId: string,
    via: "GMAIL" | "ADMIN",
    content : string
}) => {
    try {
        const res = await prismaClient.replies.create({
            data: {
                ...data
            }
        })
        return res
    } catch (error) {
        console.error(error)
        return null
    }
}