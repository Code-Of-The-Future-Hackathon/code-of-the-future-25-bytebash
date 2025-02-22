import { axiosInstance } from "~/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import {
  type ComputerCreate,
  type ComputerResponse,
} from "~/lib/validations/computer";

interface DeleteComputerMutationProps {
  id: string;
}

export function useDeleteComputerMutation({ id }: DeleteComputerMutationProps) {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<ComputerResponse>,
    AxiosError
  >({
    mutationKey: ["Computers", "Delete"],
    mutationFn: () => axiosInstance.delete(`/computers?${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Computers", "GetAll"],
      }),
  });
}
