"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  beforeToken: string;
  afterToken: string;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  beforeToken,
  afterToken,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="mt-4 flex justify-center gap-3">
      <Button variant="outline" onClick={onPrevious} disabled={!beforeToken}>
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>
      <Button variant="outline" onClick={onNext} disabled={!afterToken}>
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
