import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { axiosInstance } from "~/lib/axios";
import { AbsenteeResponse } from "~/lib/validations/absentee";

export function useGetAllAbsenteesQuery({
  ...options
}: Partial<UseQueryOptions<AbsenteeResponse[], AxiosError>>) {
  return useQuery<AbsenteeResponse[], AxiosError>({
    ...options,
    queryKey: ["Absentee", "GetAll"],
    queryFn: async () =>
      (await axiosInstance.get("/absentee")).data as AbsenteeResponse[],
  });
}
