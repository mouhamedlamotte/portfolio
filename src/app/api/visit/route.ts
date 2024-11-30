/* eslint-disable @typescript-eslint/no-unused-vars */
import { addVisite, addVisitedPage } from "@/db/visite";
import { VisitSchema } from "@/schemas/visitSchema";
import { NextRequest, NextResponse } from "next/server";
import { getDateId } from "@/lib/utils";
import { redis } from "@/lib/redis";
import { kdebug } from "@/lib/kdebug";

export async function POST(request: NextRequest) {
    try {
        const data = VisitSchema.parse(await request.json());
        const verify_key = `${getDateId()}:${data.ipAddress}`;

        const res = await redis.get(verify_key);
        if (res) {
            await addVisitedPage({
                visitId: res,
                url: data.url ?? "",
            });
            return NextResponse.json({ message: "Page enregistrée" }, { status: 200 });
        } else {
            const { url, ...visit } = data;
            const newVisit = await addVisite(visit);

            await redis.set(verify_key, newVisit.id, "EX", 3600);

            await addVisitedPage({
                visitId: newVisit.id,
                url: url ?? "",
            });

            return NextResponse.json({ message: "Visite enregistrée" }, { status: 200 });
        }
    } catch (error) {
        kdebug("Une erreur est survenue", error);
        return NextResponse.json({ message: "Une erreur est survenue" }, { status: 500 });
    }
}
