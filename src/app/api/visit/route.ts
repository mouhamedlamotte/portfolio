/* eslint-disable @typescript-eslint/no-unused-vars */
import { addVisite } from "@/db/visite";
import { VisitSchema } from "@/schemas/visitSchema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const data =  VisitSchema.parse(await request.json());
        await addVisite(data);
        return NextResponse.json({ message: "visite enregistré" }, { status: 200 });
    } catch (error) {
        console.log("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}