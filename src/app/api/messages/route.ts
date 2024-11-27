import {  getMessages } from "@/db/message";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const messages = await getMessages()
        return NextResponse.json(messages, {status: 200})
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}

