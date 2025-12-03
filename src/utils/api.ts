import { AUTH_TOKEN_KEY } from "@/lib/constant";
import type { SalesFilters, SalesResponse } from "@/lib/types";
import Cookies from "js-cookie";
import axiosInstance from "./axiosInstance";

export const getAuthToken = async (): Promise<string> => {
  const response = await axiosInstance.post("/getAuthorize", {
    tokenType: "frontEndTest",
  });
  const token = response.data.token;
  Cookies.set(AUTH_TOKEN_KEY, token, { expires: 1 / 12 }); // 2 hours
  return token;
};

export const getSalesData = async (
  filters: SalesFilters,
): Promise<SalesResponse> => {
  const params: Record<string, string> = {
    startDate: filters.startDate,
    endDate: filters.endDate,
    sortBy: filters.sortBy,
    sortOrder: filters.sortOrder,
    limit: String(filters.limit ?? 50),

    // REQUIRED params (must exist even if empty)
    priceMin: filters.priceMin ?? "",
    email: filters.email ?? "",
    phone: filters.phone ?? "",
    before: filters.before ?? "",
    after: filters.after ?? "",
  };

  const response = await axiosInstance.get<SalesResponse>("/sales", { params });
  return response.data;
};
