"use client"

import { ContactformSchema } from "@/app/portfolio/schemas/contactFormSchema"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { z } from "zod"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const contactColumns: ColumnDef<z.infer<typeof ContactformSchema>>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell : ({row}) =>{
      return <Link href={`mailto:${row.original.email}`} className="font-bold">{row.original.email}</Link>
    }
  },
]
