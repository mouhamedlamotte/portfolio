'use client'

import { useQuery } from "@tanstack/react-query";
import {  visitColumns } from "./components/columns";
import { DataTable } from "./components/data-table"
import { AxiosInstance } from "@/lib/axios";

export default function Page() {

  const {data:visits} = useQuery({
    queryKey : ['visits'],
    queryFn: async() => {
      return AxiosInstance.get('/visit').then(res => res.data)
    }
  })

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={visitColumns} data={visits ?? []} />
    </div>
  )
}