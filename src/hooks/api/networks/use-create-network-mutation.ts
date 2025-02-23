import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import {
  type NetworkCreate,
  type NetworkResponse,
} from "~/lib/validations/network";

export function useCreateNetworkMutation() {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<NetworkResponse>, AxiosError, NetworkCreate>(
    {
      mutationKey: ["Networks", "Create"],
      mutationFn: (create) => axiosInstance.post("/networks", create),
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ["Networks", "GetAll"],
        }),
    },
  );
}
