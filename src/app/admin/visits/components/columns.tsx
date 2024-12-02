"use client"

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import { ChevronDown, Copy, CopyCheck, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { RenderBroswer, RenderOS, RenderSource } from "./render-badges";



export type Visit = {
  id : string
  ipAddress: string,
  deviceType: string,
  os : string,
  browser : string,
  visitDate : string,
  isBot : boolean
  source : string
  visitedPages : {
    url : string,
  },
  downloads : {
    downloadedItem : string,
  }
}

export const columns = [
  { key: "ip", label: "IP" },
  { key: "deviceType", label: "Type d'appareil" },
  { key: "os", label: "OS" },
  { key: "browser", label: "Navigateur" },
  { key: "date", label: "Date" },
  { key: "details", label: "Détails" },
]

export const visitColumns:ColumnDef<Visit>[] = [
  {
    accessorKey: "visitDate",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
        >
          Date de visite
          {column.getIsSorted() && (
              <ChevronDown
                className={`transition-transform ${
                  column.getIsSorted() === "desc" ? "rotate-180" : ""
                }`}
              />
          )}
        </Button>
      )
    },
    cell : ({row}) => {
      return (
        <p>{formatDate(row.original.visitDate)}</p>
      )
    }
  },
  {
    accessorKey: "deviceType",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
        >
          Type d&apos;appareil
          {column.getIsSorted() && (
              <ChevronDown
                className={`transition-transform ${
                  column.getIsSorted() === "desc" ? "rotate-180" : ""
                }`}
              />
          )}
        </Button>
      )
    },
  },
  {
    accessorKey: "os",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
        >
          OS
          {column.getIsSorted() && (
              <ChevronDown
                className={`transition-transform ${
                  column.getIsSorted() === "desc" ? "rotate-180" : ""
                }`}
              />
          )}
        </Button>
      )
    },
    cell : ({row}) => {
      return (
        <RenderOS os={row.original.os} />
      )
    }
  },
  {
    accessorKey: "browser",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
        >
          Navigateur
          {column.getIsSorted() && (
              <ChevronDown
                className={`transition-transform ${
                  column.getIsSorted() === "desc" ? "rotate-180" : ""
                }`}
              />
          )}
        </Button>
      )
    },
    cell : ({row}) => {
      return (
        <RenderBroswer browser={row.original.browser} />
      )
    }
  },
  {
    accessorKey: "source",
    header: ({ column }) => {
      return (
        <Button
          className="hover:bg-transparent px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
        >
          Source
          {column.getIsSorted() && (
              <ChevronDown
                className={`transition-transform ${
                  column.getIsSorted() === "desc" ? "rotate-180" : ""
                }`}
              />
          )}
        </Button>
      )
    },
    cell : ({row}) => {
      return (
        <RenderSource source={row.original.source} />
      )
    }
  },
  {
    accessorKey: "ipAddress",
    header: "IP",
    cell: ({ row }) => {
      return (
        <RenderIp ip={row.original.ipAddress} />
      )
    }
  },
]

export const RenderIp = ({ip}: {ip : string}) => {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return  <Button variant="ghost"
    onClick={handleCopy}
    className="items-center flex justify-center *:hover:block px-0 hover:bg-transparent"
  >
    <span>{ip}</span>
    
    <div className="hidden ">
    {
      copied ? (
        <CopyCheck className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )
    }
</div>

</Button>
}
