"use server"


import { MessageType } from "@/app/[local]/admin/messages/types/message";
import { addReply, getMessageById, getReplyByMessageId, updateMessage } from "@/db/message";
import { kdebug } from "@/lib/kdebug";
import { sendEmail } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, {params} : {params: Promise<{id: string}>}) {
    const p = await params
    const id = p.id

    try {
        const reply = await getReplyByMessageId(id);
        return NextResponse.json(reply, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}

export async function POST(request: NextRequest, {params} : {params: Promise<{id: string}>}) {
    const p = await params
    const id = p.id

    try {
        const data = await request.json();
        await addReply({
            via: "ADMIN",
            content: data.content,
            messageId: p.id,
        });
        const message = await getMessageById(id);
        const html = data.html
        await sendEmail(message?.email as string, "Merci pour votre message", html);
        await updateMessage(id, {
            ...message,
            replied : true
        } as unknown as MessageType);
        return NextResponse.json({ message: "reponse envoyé" }, { status: 200 });
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}