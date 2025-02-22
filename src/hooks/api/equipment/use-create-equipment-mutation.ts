import { axiosInstance } from "~/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import {
  type EquipmentCreate,
  type EquipmentResponse,
} from "~/lib/validations/equipment";

export function useCreateEquipmentMutation() {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<EquipmentResponse>,
    AxiosError,
    EquipmentCreate
  >({
    mutationKey: ["Equipment", "Create"],
    mutationFn: (create) => axiosInstance.post("/equipment", create),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Equipment", "GetAll"],
      }),
  });
}
