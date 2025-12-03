export interface Sale {
  _id: string;
  date: string;
  price: number;
  customerEmail: string;
  customerPhone: string;
  __v: number;
}

export interface TotalSale {
  day: string;
  totalSale: number;
}

export interface SalesResponse {
  results: {
    TotalSales: TotalSale[];
    Sales: Sale[];
  };
  pagination: {
    before: string;
    after: string;
  };
}

export interface SalesFilters {
  startDate: string;
  endDate: string;
  priceMin?: string;
  email?: string;
  phone?: string;
  sortBy: "date" | "price";
  sortOrder: "asc" | "desc";
  limit?: number;
  before?: string;
  after?: string;
}
