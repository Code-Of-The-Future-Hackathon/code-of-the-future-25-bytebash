import { zodResolver } from "@hookform/resolvers/zod";
import { Key, Monitor } from "lucide-react";
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
import { useCreateComputerMutation } from "~/hooks/api/computers/use-create-computer-mutation";
import IdPrefix, { generateId } from "~/lib/ids";
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
      apiKey: generateId(IdPrefix.API_KEY),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Computer Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    placeholder="Enter computer name"
                    {...field}
                    className="pl-10"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Computer API Key</FormLabel>
              <FormControl>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    placeholder="Enter computer API key"
                    {...field}
                    className="pl-10"
                    value={form.formState.defaultValues?.apiKey ?? field.value}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add Computer
        </Button>
      </form>
    </Form>
  );
}
