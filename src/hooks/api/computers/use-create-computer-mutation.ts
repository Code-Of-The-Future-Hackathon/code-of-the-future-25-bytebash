import { axiosInstance } from "~/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import {
  type ComputerCreate,
  type ComputerResponse,
} from "~/lib/validations/computer";

export function useCreateComputerMutation() {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<ComputerResponse>,
    AxiosError,
    ComputerCreate
  >({
    mutationKey: ["Computers", "Create"],
    mutationFn: (create) => axiosInstance.post("/computers", create),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Computers", "GetAll"],
      }),
  });
}
