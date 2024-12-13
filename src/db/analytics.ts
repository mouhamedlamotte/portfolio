import { prismaClient } from "@/lib/prisma.client";

interface ChartData {
  date: string;
  count: number;
}

interface SourceData {
  source: string;
  count: number;
}

interface BrowserData {
  browser: string;
  count: number;
}

export const getDataCharts = async () => {
  try {
    const downloads = await prismaClient.downloads.findMany({
      select: {
        createdAt: true,
      },
    });

    const gamePlays = await prismaClient.gamePlay.findMany({
      select: {
        createdAt: true,
      },
    });
    const visits = await prismaClient.visit.findMany({
      select: {
        visitDate: true,
      },
    });

    const downloadsByDay: Record<string, number> = {};
    const gamePlaysByDay: Record<string, number> = {};
    const visitsByDay: Record<string, number> = {};

    downloads.forEach(({ createdAt }) => {
      const date = createdAt.toISOString().split("T")[0];
      downloadsByDay[date] = (downloadsByDay[date] || 0) + 1;
    });

    gamePlays.forEach(({ createdAt }) => {
      const date = createdAt.toISOString().split("T")[0];
      gamePlaysByDay[date] = (gamePlaysByDay[date] || 0) + 1;
    });

    visits.forEach(({ visitDate }) => {
      const date = visitDate.toISOString().split("T")[0];
      visitsByDay[date] = (visitsByDay[date] || 0) + 1;
    });

    const combinedData: Record<string, { downloads: number, gameplays: number, sources: number }> = {};

    // Ajouter les téléchargements
    downloads.forEach(({ createdAt }) => {
        const date = createdAt.toISOString().split('T')[0];
        if (!combinedData[date]) combinedData[date] = { downloads: 0, gameplays: 0, sources: 0 };
        combinedData[date].downloads += 1;
    });

    // Ajouter les gameplays
    gamePlays.forEach(({ createdAt }) => {
        const date = createdAt.toISOString().split('T')[0];
        if (!combinedData[date]) combinedData[date] = { downloads: 0, gameplays: 0, sources: 0 };
        combinedData[date].gameplays += 1;
    });

    const visitsChartData: ChartData[] = Object.entries(visitsByDay).map(
      ([date, count]) => ({
        date,
        count,
      })
    );

    const chartData = Object.entries(combinedData).map(([date, { downloads, gameplays }]) => ({
        date,
        downloads,
        gameplays,
    }));


    const data = {
      downloads_gameplays: chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()), 
      visits: visitsChartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    };

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCounts = async (): Promise<{
  downloads: number;
  visite: number;
  GamePlays: number;
  vistedPages: number;
}> => {
  try {
    const downloads = await prismaClient.downloads.count();
    const visite = await prismaClient.visit.count();
    const GamePlays = await prismaClient.gamePlay.count();
    const vistedPages = await prismaClient.visitedPage.count();

    return { downloads, GamePlays, visite, vistedPages };
  } catch (error) {
    console.error(error);
    return { downloads: 0, GamePlays: 0, visite: 0, vistedPages: 0 };
  }
};

export const getTopSources = async (): Promise<SourceData[]> => {
  try {
    const sources = await prismaClient.visit.groupBy({
      by: ["source"],
      _count: {
        source: true,
      },
      orderBy: {
        _count: {
          source: "desc",
        },
      },
      take: 5,
    });

    const topSources: SourceData[] = sources.map((source) => ({
      source: source.source ?? "unknown",
      count: source._count.source,
    })) ;

    return topSources;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTopBrowsers = async (): Promise<BrowserData[]> => {
  try {
    const browsers = await prismaClient.visit.groupBy({
      by: ["browser"],
      _count: {
        browser: true,
      },
      orderBy: {
        _count: {
          browser: "desc",
        },
      },
      take: 5,
    }); 

    const topBrowsers: BrowserData[] = browsers.map((browser) => ({
      browser: browser.browser ?? "unknown",
      count: browser._count.browser,
    })) ;
    return topBrowsers;
  } catch (error) {
    console.error(error);
    return [];
  }
};
