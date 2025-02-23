import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useCreateLampMutation } from "~/hooks/api/lamps/use-create-lamp-mutation";
import { type LampsCreate, lampsCreateSchema } from "~/lib/validations/lamp";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type LampCreateFormProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function LampCreateForm({ setIsOpen }: LampCreateFormProps) {
  const { mutateAsync: add } = useCreateLampMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<LampsCreate>({
    resolver: zodResolver(lampsCreateSchema),
    defaultValues: {
      name: "",
      groupName: "",
    },
    disabled: isLoading,
  });

  function onSubmit(data: LampsCreate) {
    setIsLoading(true);
    const toastId = toast.loading("Adding Lamp...");

    add(data)
      .then(() => {
        toast.success("Lamp Added!", {
          id: toastId,
        });

        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Failed to add lamp!", {
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
              <FormLabel>Lamp Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter lamp name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lamp Group Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter lamp group name" {...field} />
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
