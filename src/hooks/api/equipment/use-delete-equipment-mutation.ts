import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type EquipmentResponse } from "~/lib/validations/equipment";

interface DeleteEquipmentMutationProps {
  id: string;
}

export function useDeleteEquipmentMutation({
  id,
}: DeleteEquipmentMutationProps) {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<EquipmentResponse>, AxiosError>({
    mutationKey: ["Equipment", "Delete"],
    mutationFn: () => axiosInstance.delete(`/equipment/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Equipment", "GetAll"],
      }),
  });
}
