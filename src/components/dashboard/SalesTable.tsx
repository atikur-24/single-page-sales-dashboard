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
import { ArrowDownUp, ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

interface SalesTableProps {
  data: Sale[];
  filters: SalesFilters;
  onSort: (column: "date" | "price") => void;
}

export default function SalesTable({ data, filters, onSort }: SalesTableProps) {
  const getSortIcon = (column: "date" | "price") => {
    if (filters.sortBy !== column) return <ArrowUpDown className="h-4 w-4" />;
    return filters.sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className="cst-gradient-card overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>
                <button
                  onClick={() => onSort("date")}
                  className="flex items-center gap-2 hover:bg-slate-100"
                >
                  <span>Date</span> {getSortIcon("date")}
                </button>
              </TableHead>
              <TableHead className="text-right">
                <button
                  onClick={() => onSort("price")}
                  className="flex items-center justify-end gap-2 text-right hover:bg-slate-100"
                >
                  <span>Price</span> {getSortIcon("price")}
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-8 text-center text-slate-500"
                >
                  No sales data found
                </TableCell>
              </TableRow>
            ) : (
              data?.map((sale) => (
                <TableRow key={sale._id}>
                  <TableCell>{sale.customerEmail}</TableCell>
                  <TableCell>{sale.customerPhone}</TableCell>
                  <TableCell>{new Date(sale.date).toLocaleString()}</TableCell>
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
