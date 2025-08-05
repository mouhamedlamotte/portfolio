"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowDownIcon, ArrowUpIcon, Download, Gamepad, Globe, Users } from 'lucide-react'
import { useQuery } from "@tanstack/react-query"
import { AxiosInstance } from "@/lib/axios"
import { kdebug } from "@/lib/kdebug"







type ChartData = {
  date: string
  count: number
}

type AnalyticsType = {
  counts: {
    downloads: number,
    GamePlays: number,
    visite: number,
    vistedPages: number
  },
  ChartData: {
    downloads_gameplays: {
      date: string,
      downloads: number,
      gameplays: number
    }[],
    visits: ChartData[],
    vistedPages: ChartData[]
  },
  topSources: {
    source: string,
    count: number
  }[],
  topBrowsers: {
    browser: string,
    count: number
  }[]
}

export default function AnalyticsDashboardCustom() {

  const {data} = useQuery<AnalyticsType>({
    queryKey : ['analytics'],
    queryFn: async () => {
      return (await AxiosInstance.get('/analytics')).data
    }
  })
  
  if (data){
    kdebug(data)
  }

  return (
    <div className="min-h-screen  p-8 dark">
      <div className="mx-auto space-y-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Downloads Card */}
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.counts?.downloads}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">
                  <ArrowUpIcon className="inline h-4 w-4" />
                  +5.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>

          {/* GamePlays Card */}
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total GamePlays</CardTitle>
              <Gamepad className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.counts?.GamePlays}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500">
                  <ArrowDownIcon className="inline h-4 w-4" />
                  -2.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>

          {/* Visits Card */}
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.counts?.visite}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">
                  <ArrowUpIcon className="inline h-4 w-4" />
                  +8.7%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>

          {/* Visited Pages Card */}
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Pages Visited</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.counts?.vistedPages}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">
                  <ArrowUpIcon className="inline h-4 w-4" />
                  +3.4%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 xl:grid-cols-2">
          {/* Downloads and GamePlays Chart */}
          <Card className="">
            <CardHeader>
              <CardTitle>Downloads and GamePlays</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  downloads: {
                    label: "Downloads",
                    color: "hsl(var(--chart-1))",
                  },
                  gameplays: {
                    label: "GamePlays",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data?.ChartData?.downloads_gameplays}>
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="downloads"
                      strokeWidth={2}
                      dot={false}
                      stroke="var(--color-downloads)"
                    />
                    <Line
                      type="monotone"
                      dataKey="gameplays"
                      strokeWidth={2}
                      dot={false}
                      stroke="var(--color-gameplays)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Visits Chart */}
          <Card className="">
            <CardHeader>
              <CardTitle>Visits Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  visits: {
                    label: "Visits",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data?.ChartData?.visits}>
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="var(--color-visits)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Sources and Browsers */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Top Sources */}
          <Card className="">
            <CardHeader>
              <CardTitle>Top Visit Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data?.topSources?.map((source, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1/2 text-sm">{source.source}</div>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(source.count / data?.topSources[0]?.count) * 100}%` }}
                      />
                    </div>
                    <div className="w-16 text-right text-sm">{source.count}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Browsers */}
          <Card className="">
            <CardHeader>
              <CardTitle>Top Browsers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data?.topBrowsers?.map((browser, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1/2 text-sm">{browser.browser}</div>
                    <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(browser.count / data?.topBrowsers[0].count) * 100}%` }}
                      />
                    </div>
                    <div className="w-16 text-right text-sm">{browser.count}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

