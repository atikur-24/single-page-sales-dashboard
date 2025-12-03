"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { SalesFilters } from "@/lib/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from "../ui/CustomDateInput";

interface FilterPanelProps {
  filters: SalesFilters;
  onFiltersChange: (filters: Partial<SalesFilters>) => void;
}

export default function FilterPanel({
  filters,
  onFiltersChange,
}: FilterPanelProps) {
  const parseDate = (dateStr?: string) => (dateStr ? new Date(dateStr) : null);

  return (
    <div className="cst-gradient-card space-y-6 p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold">Filters</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Label htmlFor="startDate">Start Date</Label>
          <DatePicker
            id="startDate"
            selected={parseDate(filters.startDate)}
            onChange={(date) =>
              onFiltersChange({
                startDate: date ? date.toISOString().split("T")[0] : "",
                sortBy: "date",
              })
            }
            customInput={
              <CustomDateInput
                onClear={() =>
                  onFiltersChange({
                    startDate: "",
                  })
                }
              />
            }
            placeholderText="Select start date"
            dateFormat="yyyy-MM-dd"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={parseDate(filters.endDate) || new Date()}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="endDate">End Date</Label>
          <DatePicker
            id="endDate"
            selected={parseDate(filters.endDate)}
            onChange={(date) =>
              onFiltersChange({
                endDate: date ? date.toISOString().split("T")[0] : "",
                sortBy: "date",
              })
            }
            customInput={
              <CustomDateInput
                onClear={() =>
                  onFiltersChange({
                    endDate: "",
                  })
                }
              />
            }
            placeholderText="Select end date"
            dateFormat="yyyy-MM-dd"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={parseDate(filters.startDate) as any}
            maxDate={new Date()}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Customer Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g., issa@autobizz.net"
            value={filters.email}
            onChange={(e) => onFiltersChange({ email: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g., +11111111"
            value={filters.phone}
            onChange={(e) => onFiltersChange({ phone: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="priceMin">Minimum Price</Label>
          <Input
            id="priceMin"
            type="number"
            placeholder="e.g., 100"
            value={filters.priceMin}
            onChange={(e) =>
              onFiltersChange({ priceMin: e.target.value, sortBy: "price" })
            }
          />
        </div>
      </div>
    </div>
  );
}
