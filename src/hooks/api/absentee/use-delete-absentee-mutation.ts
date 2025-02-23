import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "~/lib/axios";
import { type AbsenteeResponse } from "~/lib/validations/absentee";

interface DeleteAbsenteeMutationProps {
  id: string;
}

export function useDeleteAbsenteeMutation({ id }: DeleteAbsenteeMutationProps) {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<AbsenteeResponse>, AxiosError>({
    mutationKey: ["Absentees", "Delete"],
    mutationFn: () => axiosInstance.delete(`/absentees/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["Absentees", "GetAll"],
      }),
  });
}
