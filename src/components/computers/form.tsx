import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useCreateComputerMutation } from "~/hooks/api/use-create-computer-mutation";
import {
  type ComputerCreate,
  computerCreateSchema,
} from "~/lib/validations/computer";

interface ComputerCreateFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function ComputerCreateForm({
  setIsOpen,
}: ComputerCreateFormProps) {
  const { mutateAsync: add } = useCreateComputerMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<ComputerCreate>({
    resolver: zodResolver(computerCreateSchema),
    defaultValues: {
      name: "",
    },
    disabled: isLoading,
  });

  function onSubmit(data: ComputerCreate) {
    setIsLoading(true);
    const toastId = toast.loading("Adding Computer...");

    add(data)
      .then(() => {
        toast.success("Computer Added!", {
          id: toastId,
        });

        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Failed to add computer!", {
          id: toastId,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Computer Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter computer name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
