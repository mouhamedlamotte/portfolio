import { MessageType } from "@/app/admin/messages/types/message";
import { resume } from "@/data";
import { addReply, getMessageById, getReplyByMessageId, updateMessage } from "@/db/message";
import { sendEmail } from "@/lib/nodemailer";
import { replyMessageTemplate } from "@/templates/replymessage";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, {params} : {params: {id: string}}) {
    try {
    const id = await params.id
        const reply = await getReplyByMessageId(id)
        return NextResponse.json(reply, {status: 200})
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}

export async function POST(request: NextRequest, {params} : {params: {id: string}}) {
    const id = await params.id

    try {
        const data = await request.json();
        await addReply({
            ...data,
            messageId: id,
        });
        const message = await getMessageById(id);
        const html = replyMessageTemplate
        .replace('{{portfolio_name}}', resume.name)
        .replace('{{portfolio_name}}', resume.name)
        .replace('{{recipient_name}}', message?.name as string)
        .replace('{{message}}', data.content)
        .replace('{{devis_link}}', "http://localhost:3000/portfolio/devis")
        .replace('{{recipient_name}}', message?.name as string)
        .replace('{{reply_email}}', 'mouhamedlamotte.dev')
        .replace('{{reply_email}}', 'mouhamedlamotte.dev')
        await sendEmail(message?.email as string, "Merci pour votre message", html);
        await updateMessage(id, {
            ...message,
            replied : true
        } as unknown as MessageType);
        return NextResponse.json({ message: "reponse envoyé" }, { status: 200 });
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}