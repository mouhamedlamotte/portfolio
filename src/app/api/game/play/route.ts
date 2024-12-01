import { addGamePlay, GamePlaySchema } from "@/db/gameplay";
import { kdebug } from "@/lib/kdebug";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async () => {
    return NextResponse.json({ message: "hello" });
};

export const POST = async (req : NextRequest) => {
    try {
        const data = GamePlaySchema.parse(await req.json());
        kdebug(data);
        addGamePlay(data);
        return NextResponse.json({ message: "Game played" });
    } catch (error) {
        kdebug("une erreur est survenue", error);
    }
}