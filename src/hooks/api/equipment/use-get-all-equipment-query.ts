import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type EquipmentResponse } from "~/lib/validations/equipment";

export function useGetAllEquipmentQuery({
  ...options
}: Partial<UseQueryOptions<EquipmentResponse[], AxiosError>>) {
  return useQuery<EquipmentResponse[], AxiosError>({
    ...options,
    queryKey: ["Equipment", "GetAll"],
    queryFn: async () =>
      (await axiosInstance.get("/equipment")).data as EquipmentResponse[],
  });
}
