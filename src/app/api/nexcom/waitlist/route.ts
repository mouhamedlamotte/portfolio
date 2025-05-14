import { addWaitlist, getWailist } from "@/db/waitlist";
import { kdebug } from "@/lib/kdebug";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const contacts = await getWailist()
        return NextResponse.json(contacts, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}  

export async function POST(req : NextRequest) {
    try {
        const data = await req.json();
        await addWaitlist(data);
        return NextResponse.json({ message: "Votre email a bien été ajouté" }, { status: 201 });
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}

