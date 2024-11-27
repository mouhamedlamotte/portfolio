import { getMessageById, updateMessage } from "@/db/message";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest, {params} : {params: Promise<{id: string}>}) {
        try {
        const p = await params
        const id = p.id

            const message = await getMessageById(id)
            return NextResponse.json(message, {status: 200})
        } catch (error) {
            console.log("une erreur est survenue", error);
            return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
        }
}

export async function PUT(req: NextRequest, {params} :  {params:  Promise<{id: string}>}) {
    try {
        const p = await params
        const id = p.id
        const message = await updateMessage(id, await req.json())
        return NextResponse.json(message, {status: 200})
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}