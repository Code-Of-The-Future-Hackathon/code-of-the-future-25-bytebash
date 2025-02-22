import { axiosInstance } from "~/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { TvCreate, TvResponse } from "~/lib/validations/tv";

export function useCreateTvMutation() {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<TvResponse>, AxiosError, TvCreate>({
    mutationKey: ["TV", "Create"],
    mutationFn: (create) => axiosInstance.post("/tv", create),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["TV", "GetAll"],
      }),
  });
}
