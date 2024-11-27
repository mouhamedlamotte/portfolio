import { getMessageById, updateMessage } from "@/db/message";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest, {params} : {params: {id: string}}) {
        try {
        const id = await params.id

            const message = await getMessageById(id)
            return NextResponse.json(message, {status: 200})
        } catch (error) {
            console.log("une erreur est survenue", error);
            return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
        }
}

export async function PUT(req: NextRequest, {params} :  {params:  {id: string}}) {
    try {
        const id = await params.id
        // const  data = MessageSchema.parse(await req.json());
        const message = await updateMessage(id, await req.json())
        return NextResponse.json(message, {status: 200})
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}