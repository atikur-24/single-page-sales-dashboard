import { AUTH_TOKEN_KEY } from "@/lib/constant";
import type { SalesFilters, SalesResponse } from "@/lib/types";
import Cookies from "js-cookie";
import axiosInstance from "./axiosInstance";

export const getAuthToken = async (): Promise<string> => {
  const response = await axiosInstance.post("/getAuthorize", {
    tokenType: "frontEndTest",
  });

  const token = response.data.token;
  const expireInSeconds = response.data.expire ?? 7200;
  const expireInDays = expireInSeconds / 86400;

  Cookies.set(AUTH_TOKEN_KEY, token, { expires: expireInDays });
  return token;
};

export const getSalesData = async (
  filters: SalesFilters,
): Promise<SalesResponse> => {
  const params: Record<string, string> = {
    startDate: filters.startDate as any,
    endDate: filters.endDate as any,
    sortBy: filters.sortBy as any,
    sortOrder: filters.sortOrder as any,
    limit: String(filters.limit ?? 50),

    priceMin: filters.priceMin ?? "",
    email: filters.email ?? "",
    phone: filters.phone ?? "",
    before: filters.before ?? "",
    after: filters.after ?? "",
  };

  const response = await axiosInstance.get<SalesResponse>("/sales", { params });
  return response.data;
};
