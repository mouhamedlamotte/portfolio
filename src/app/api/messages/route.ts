import { addContact } from "@/db/contacts";
import {  getMessages } from "@/db/message";
import { kdebug } from "@/lib/kdebug";
import { redis } from "@/lib/redis";
import { getDateId } from "@/lib/utils";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const messages = await getMessages()
        return NextResponse.json(messages, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}


export const POST = async (req : NextRequest) => {
    try {
        const data = await req.json();
        const visitId = await redis.get(`${getDateId()}:${req.headers.get("x-forwarded-for")}`);
        await addContact({
            ...data,
            visitId: visitId
        });
        return NextResponse.json({ message: "Message envoyé" }, { status: 200 });
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}