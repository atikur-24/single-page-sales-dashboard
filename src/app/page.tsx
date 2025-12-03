"use client";

import FilterPanel from "@/components/dashboard/FilterPanel";
import Pagination from "@/components/dashboard/Pagination";
import SalesChart from "@/components/dashboard/SalesChart";
import SalesTable from "@/components/dashboard/SalesTable";
import { useSalesData } from "@/hooks/useSalesData";
import type { SalesFilters } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState<SalesFilters>({
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    priceMin: "",
    email: "",
    phone: "",
    sortBy: "date",
    sortOrder: "asc",
    limit: 50,
  });

  const { data, isLoading, error } = useSalesData(filters);

  const handleFiltersChange = (newFilters: Partial<SalesFilters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      after: undefined,
      before: undefined,
    }));
  };

  const handleSort = (column: "date" | "price") => {
    if (filters.sortBy !== column) {
      setFilters({
        ...filters,
        sortBy: column,
        sortOrder: "asc",
      });
      return;
    }

    if (filters.sortOrder === "asc") {
      setFilters({
        ...filters,
        sortBy: column,
        sortOrder: "desc",
      });
    } else if (filters.sortOrder === "desc") {
      setFilters({
        ...filters,
        sortBy: "",
        sortOrder: "",
      });
    } else {
      setFilters({
        ...filters,
        sortBy: column,
        sortOrder: "asc",
      });
    }
  };

  const handleNext = () => {
    if (data?.pagination.after) {
      setFilters((prev) => ({
        ...prev,
        after: data.pagination.after,
        before: undefined,
      }));
    }
  };

  const handlePrevious = () => {
    if (data?.pagination.before) {
      setFilters((prev) => ({
        ...prev,
        before: data.pagination.before,
        after: undefined,
      }));
    }
  };

  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold md:text-3xl">Sales Dashboard</h1>

        {/* filter part */}
        <FilterPanel filters={filters} onFiltersChange={handleFiltersChange} />

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="text-primary h-8 w-8 animate-spin" />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
            Error loading data. Please try again.
          </div>
        ) : (
          <>
            <div className="mb-12">
              {/* table */}
              <SalesTable
                data={data?.results.Sales || []}
                filters={filters}
                onSort={handleSort}
              />

              {/* pagination */}
              <Pagination
                beforeToken={data?.pagination.before || ""}
                afterToken={data?.pagination.after || ""}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>

            {/* chart */}
            <SalesChart data={data?.results?.TotalSales || []} />
          </>
        )}
      </div>
    </div>
  );
}
