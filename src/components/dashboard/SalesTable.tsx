"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Sale, SalesFilters } from "@/lib/types";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface SalesTableProps {
  data: Sale[];
  filters: SalesFilters;
  onSort: (column: "date" | "price") => void;
}

export default function SalesTable({ data, filters, onSort }: SalesTableProps) {
  const renderSortIcon = (column: "date" | "price") => {
    if (filters.sortBy !== column || !filters.sortOrder) {
      return <ArrowUpDown className="h-4 w-4" />;
    }

    if (filters.sortOrder === "asc") {
      return <ArrowUp className="h-4 w-4" />;
    }

    if (filters.sortOrder === "desc") {
      return <ArrowDown className="h-4 w-4" />;
    }

    return <ArrowUpDown className="h-4 w-4" />;
  };

  return (
    <div className="cst-gradient-card overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Customer Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>
                <button
                  onClick={() => onSort("date")}
                  className="flex items-center gap-2"
                >
                  <span>Date</span> {renderSortIcon("date")}
                </button>
              </TableHead>
              <TableHead className="text-right">
                <button
                  onClick={() => onSort("price")}
                  className="flex items-center justify-end gap-2 text-right"
                >
                  <span>Price</span> {renderSortIcon("price")}
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="py-8 text-center text-neutral-400"
                >
                  No sales data found
                </TableCell>
              </TableRow>
            ) : (
              data?.map((sale) => (
                <TableRow key={sale._id}>
                  <TableCell>{sale.customerEmail}</TableCell>
                  <TableCell>{sale.customerPhone}</TableCell>
                  <TableCell>{sale.date.split("T")[0]}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${sale.price.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
