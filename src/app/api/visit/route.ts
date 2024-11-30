/* eslint-disable @typescript-eslint/no-unused-vars */
import { addVisite } from "@/db/visite";
import { VisitSchema } from "@/schemas/visitSchema";
import { NextRequest, NextResponse } from "next/server";
import { getDateId } from "@/lib/utils";
import { redis } from "@/lib/redis";
import { kdebug } from "@/lib/kdebug";


export async function POST(request: NextRequest) {
    try {
        const data =  VisitSchema.parse(await request.json());
        const verify_key = `${getDateId()}-${data.ipAddress}-${data.visitedPage}`;
        await redis.get(verify_key).then(async (res) => {
            if (res) {
                return NextResponse.json({ message: "visite deja enregistré" }, { status: 200 });
            } else {
                await addVisite(data).then(()=>{
                    redis.set(verify_key, "true", "EX", 3600);
                });
            }
        })
        return NextResponse.json({ message: "visite enregistré" }, { status: 200 });
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({ message: "une erreur est survenue" }, { status: 500 });
    }
}