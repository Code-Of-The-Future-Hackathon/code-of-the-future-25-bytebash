import { axiosInstance } from "~/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { AbsenteeCreate, AbsenteeResponse } from "~/lib/validations/absentee";

export function useCreateAbsenteeMutation() {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<AbsenteeResponse>,
    AxiosError,
    AbsenteeCreate
  >({
    mutationKey: ["Absentees", "Create"],
    mutationFn: (create) => axiosInstance.post("/absentees", create),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Absentees", "GetAll"],
      }),
  });
}
