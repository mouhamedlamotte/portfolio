import { getCounts, getDataCharts, getTopBrowsers, getTopSources } from "@/db/analytics";
import { kdebug } from "@/lib/kdebug";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const counts = await getCounts()
        const ChartData = await getDataCharts()
        const topSources = await getTopSources()
        const topBrowsers = await getTopBrowsers()

        return NextResponse.json({ counts, ChartData, topSources, topBrowsers }, {status: 200})
    } catch (error) {
        kdebug("une erreur est survenue", error);
        return NextResponse.json({message: "une erreur est survenue"}, {status: 500})
    }
}