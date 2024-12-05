"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Icons } from '@/icons'
import { cleanCache } from '@/lib/redis'
import { useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib/axios'
import { Loader } from 'lucide-react'

export const CacheTab = () => {

    const [enableCache, setEnableCache] = React.useState(false)

    const {isFetching} = useQuery({
        queryKey: ['clean-blog-cache'],
        queryFn: async() => {
            return await AxiosInstance.get('/cache/blog/clean').then(res => res.data)
        },
        enabled: !!enableCache,
        onSuccess: () => {
            setEnableCache(false)
        }
    })

  return (
<Card>
<CardHeader>
  <CardTitle>Gestion du cache</CardTitle>
  <CardDescription>Configurez et gérez les paramètres de cache.</CardDescription>
</CardHeader>
<CardContent className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="enable-cache">Activer le cache</Label>
    <Switch id="enable-cache" />
  </div>
  <div className="space-y-2">
    <Label>Actions de cache</Label>
    <div className="flex space-x-2">
        <Button variant="secondary"
        onClick={() => setEnableCache(true)}
        >

            Reactualiser le blog
            {
                isFetching ? (
                    <Loader className="animate-spin" />
                ) : <Icons.notion />
            }
            </Button>
      <Button variant="outline">Vider le cache Redis</Button>
      <Button variant="outline">Vider le cache du navigateur</Button>
    </div>
  </div>
</CardContent>
<CardFooter>
  <Button>Sauvegarder les paramètres de cache</Button>
</CardFooter>
</Card>
  )
}
