import { AUTH_TOKEN_KEY } from "@/lib/constant";
import type { SalesFilters } from "@/lib/types";
import { getAuthToken, getSalesData } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useSalesData = (filters: SalesFilters) => {
  return useQuery({
    queryKey: ["sales", filters],
    queryFn: async () => {
      // Auto-fetch token if missing
      let token = Cookies.get(AUTH_TOKEN_KEY);
      if (!token) {
        token = await getAuthToken();
      }
      return getSalesData(filters);
    },
    staleTime: 5 * 60 * 1000, // Cache 5 minutes
    gcTime: 10 * 60 * 1000, // Keep 10 minutes
  });
};
