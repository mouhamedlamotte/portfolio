"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { Pagination } from "./pagination";
import { columns } from "./columns";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Visit {
  id: string;
  ip: string;
  deviceType: string;
  os: string;
  browser: string;
  date: string;
  details: string;
}

interface DataTableProps {
  data?: Visit[];
}

export function DataTable({ data = [] }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<keyof Visit | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const itemsPerPage = 10;

  const sortedData = [...(data ?? [])].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const totalItems = data?.length ?? 0;
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (column: keyof Visit) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Liste des visites du portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        {paginatedData.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key} className="font-semibold">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort(column.key as keyof Visit)}
                      className="flex items-center hover:bg-transparent gap-1 p-0 !py-0" 
                    >
                      {column.label}
                      {sortColumn === column.key && (
                        <ChevronDown
                          className={`transition-transform ${
                            sortDirection === "desc" ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Button>
                  </TableHead>
                ))}
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((visit) => (
                <TableRow key={visit.id}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {visit[column.key as keyof Visit]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => console.log("Voir plus", visit.id)}
                        >
                          Voir plus
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => console.log("Supprimer", visit.id)}
                        >
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-4">No data available</div>
        )}
      </CardContent>
      {/* <CardFooter className="w-full dev">
         <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        /> 
      </CardFooter> */}
    </Card>
  );
}
