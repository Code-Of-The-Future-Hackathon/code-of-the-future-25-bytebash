import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import { TvResponse } from "~/lib/validations/tv";

interface DeleteLampsMutationProps {
  id: string;
}

export function useDeleteTvMutation({ id }: DeleteLampsMutationProps) {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<TvResponse>, AxiosError>({
    mutationKey: ["TV", "Delete"],
    mutationFn: () => axiosInstance.delete(`/tv/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["TV", "GetAll"],
      }),
  });
}
