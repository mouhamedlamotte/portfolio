import { addDownload } from "@/db/downloads";
import { kdebug } from "@/lib/kdebug";
import { redis } from "@/lib/redis";
import { getDateId } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({ message: "hello from downloads" });
};

export const POST = async (req : NextRequest) => {
    try {
        const data = await req.json();
        const visitId = await redis.get(`${getDateId()}:${req.headers.get("x-forwarded-for")}`);
        await addDownload({
            ...data,
            visitId: visitId
        });
        return NextResponse.json({ message: "Download saved" });
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}