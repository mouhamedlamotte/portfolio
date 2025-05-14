"use server"

import { prismaClient } from "@/lib/prisma.client";
import { z } from "zod";

const WaitlistSchema = z.object({
    email: z.string().email(),
});

export const addWaitlist = async (waitlist: z.infer<typeof WaitlistSchema>) => {
    try {
        const res = await prismaClient.nexcomWaitlist.create({
            data: {
                email: waitlist.email
            }
        })
        return res
    } catch (error) {
        console.error(error)
        return false
    }
}


export const getWailist = async () => {
    try {
        const res = await prismaClient.nexcomWaitlist.findMany()
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

