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
        const visitId = await redis.get(verify_key);
        if (visitId) {
            const verify_page_key = `${verify_key}:${data.url}`;
            const pageId = await redis.get(verify_page_key);
            if (pageId) {
                return NextResponse.json({ message: "Page enregistrée" }, { status: 200 });
            }
            const page = await addVisitedPage({
                visitId: visitId,
                url: data.url ?? "",
            });
            await redis.set(verify_page_key, page, "EX", 3600);
            return NextResponse.json({ message: "Page enregistrée" }, { status: 200 });
        } else {
            const { url, ...visit } = data;
            const newVisitId = await addVisite(visit);
            
            await redis.set(verify_key, newVisitId, "EX", 3600);

            await addVisitedPage({
                visitId: newVisitId,
                url: url ?? "",
            });

            return NextResponse.json({ message: "Visite enregistrée" }, { status: 200 });
        }
    } catch (error) {
        kdebug("Une erreur est survenue", error);
        return NextResponse.json({ message: "Une erreur est survenue" }, { status: 500 });
    }
}
