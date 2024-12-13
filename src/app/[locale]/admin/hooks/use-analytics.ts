import { useQuery } from '@tanstack/react-query'
import type { GamePlay, DevisRequest, Download, Visitor, TimeRange } from "../types/analytics"

async function fetchData<T>(endpoint: string, timeRange: TimeRange) {
  const response = await fetch(`/api/${endpoint}?timeRange=${timeRange}`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json() as Promise<T>
}

export function useGamePlays(timeRange: TimeRange) {
  return useQuery({
    queryKey: ['gamePlays', timeRange],
    queryFn: () => fetchData<GamePlay[]>('game-plays', timeRange)
  })
}

export function useDevisRequests(timeRange: TimeRange) {
  return useQuery({
    queryKey: ['devisRequests', timeRange],
    queryFn: () => fetchData<DevisRequest[]>('devis-requests', timeRange)
  })
}

export function useDownloads(timeRange: TimeRange) {
  return useQuery({
    queryKey: ['downloads', timeRange],
    queryFn: () => fetchData<Download[]>('downloads', timeRange)
  })
}

export function useVisitors(timeRange: TimeRange) {
  return useQuery({
    queryKey: ['visitors', timeRange],
    queryFn: () => fetchData<Visitor[]>('visitors', timeRange)
  })
}

