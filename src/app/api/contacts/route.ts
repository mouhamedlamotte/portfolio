import { getContacts } from "@/db/contacts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const contacts = await getContacts()
        return NextResponse.json(contacts, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}