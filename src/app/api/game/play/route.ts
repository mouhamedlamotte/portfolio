import { addGamePlay, GamePlaySchema } from "@/db/gameplay";
import { kdebug } from "@/lib/kdebug";
import { redis } from "@/lib/redis";
import { getDateId } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({ message: "hello" });
};

export const POST = async (req : NextRequest) => {
    try {
        const data = GamePlaySchema.parse(await req.json());
        const visitId = await redis.get(`${getDateId()}:${req.headers.get("x-forwarded-for")}`);        
        addGamePlay({
            ...data,
            visitId: visitId ?? undefined
        });
        return NextResponse.json({ message: "Game played" });
    } catch (error) {
        kdebug("une erreur est survenue", error);
    }
}