import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type LampsResponse } from "~/lib/validations/lamp";

interface DeleteLampsMutationProps {
  id: string;
}

export function useDeleteLampMutation({ id }: DeleteLampsMutationProps) {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<LampsResponse>, AxiosError>({
    mutationKey: ["Lamps", "Delete"],
    mutationFn: () => axiosInstance.delete(`/lamps/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Lamps", "GetAll"],
      }),
  });
}
