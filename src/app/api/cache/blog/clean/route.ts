import { kdebug } from "@/lib/kdebug";
import { cleanCache } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');
        const patern = searchParams.get('patern');
        const res = await cleanCache(key, patern);
        return NextResponse.json({"message": "ok"}, {status: 200})
    } catch (error) {
        kdebug('server error ==>', error);
        return NextResponse.json({"message": "error"}, {status: 500})
    }
}