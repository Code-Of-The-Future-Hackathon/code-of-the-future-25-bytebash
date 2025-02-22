import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type LampsCreate, type LampsResponse } from "~/lib/validations/lamps";

export function useCreateLampMutation() {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<LampsResponse>, AxiosError, LampsCreate>({
    mutationKey: ["Lamps", "Create"],
    mutationFn: (create) => axiosInstance.post("/lamps", create),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Lamps", "GetAll"],
      }),
  });
}
