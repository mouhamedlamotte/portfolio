/* eslint-disable @typescript-eslint/no-unused-vars */
import { addVisite, addVisitedPage, getallAndNestedVisit } from "@/db/visite";
import { VisitSchema } from "@/schemas/visitSchema";
import { NextRequest, NextResponse } from "next/server";
import { getDateId } from "@/lib/utils";
import { redis } from "@/lib/redis";
import { kdebug } from "@/lib/kdebug";


export async function GET(request: NextRequest) {
    try {
        const data = await getallAndNestedVisit()
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        kdebug('server error ==>', error);
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = VisitSchema.parse(await request.json());
        const verify_key = `${getDateId()}:${data.ipAddress}`;
        const visitId = await redis.get(verify_key);
        const verify_page_key = `${verify_key}:${data.url}`;
        if (visitId) {
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

            const page = await addVisitedPage({
                visitId: newVisitId,
                url: url ?? "",
            });

            await redis.set(verify_page_key, page, "EX", 3600);
            

            return NextResponse.json({ message: "Visite enregistrée" }, { status: 200 });
        }
    } catch (error) {
        kdebug("Une erreur est survenue", error);
        return NextResponse.json({ message: "Une erreur est survenue" }, { status: 500 });
    }
}
