import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { axiosInstance } from "~/lib/axios";
import { NetworkResponse } from "~/lib/validations/network";

export function useGetAllNetworksQuery({
  ...options
}: Partial<UseQueryOptions<NetworkResponse[], AxiosError>>) {
  return useQuery<NetworkResponse[], AxiosError>({
    ...options,
    queryKey: ["Networks", "GetAll"],
    queryFn: async () =>
      (await axiosInstance.get("/networks")).data as NetworkResponse[],
  });
}
