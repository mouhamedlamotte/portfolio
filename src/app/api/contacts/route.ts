import { getContacts } from "@/db/contacts";
import { kdebug } from "@/lib/kdebug";
import {  NextResponse } from "next/server";

export async function GET(){
    try {
        const contacts = await getContacts()
        return NextResponse.json(contacts, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}  