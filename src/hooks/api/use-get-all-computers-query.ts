import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type ComputerResponse } from "~/lib/validations/computer";

export function useGetAllComputersQuery({
  ...options
}: Partial<UseQueryOptions<ComputerResponse[], AxiosError>>) {
  return useQuery<ComputerResponse[], AxiosError>({
    ...options,
    queryKey: ["Computers", "GetAll"],
    queryFn: async () =>
      (await axiosInstance.get("/computers")).data as ComputerResponse[],
  });
}
