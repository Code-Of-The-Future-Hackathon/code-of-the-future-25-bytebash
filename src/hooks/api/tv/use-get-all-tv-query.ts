import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { axiosInstance } from "~/lib/axios";
import { TvResponse } from "~/lib/validations/tv";

export function useGetAllTvQuery({
  ...options
}: Partial<UseQueryOptions<TvResponse[], AxiosError>>) {
  return useQuery<TvResponse[], AxiosError>({
    ...options,
    queryKey: ["Absentee", "GetAll"],
    queryFn: async () => (await axiosInstance.get("/tv")).data as TvResponse[],
  });
}
