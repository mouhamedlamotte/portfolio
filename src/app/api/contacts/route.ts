import { addContact, getContacts } from "@/db/contacts";
import { kdebug } from "@/lib/kdebug";
import { redis } from "@/lib/redis";
import { getDateId } from "@/lib/utils";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const contacts = await getContacts()
        return NextResponse.json(contacts, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}  

export async function POST(req : NextRequest) {
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

