import { zodResolver } from "@hookform/resolvers/zod";
import { Monitor } from "lucide-react";
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
import { useCreateTvMutation } from "~/hooks/api/tv/use-create-tv-mutation";
import { NetworkCreate, networkCreateSchema } from "~/lib/validations/networks";
import { TvCreate, tvCreateSchema } from "~/lib/validations/tv";

interface NetworkCreateFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function NetworkCreateForm({ setIsOpen }: NetworkCreateFormProps) {
  const { mutateAsync: add } = useCreateTvMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<NetworkCreate>({
    resolver: zodResolver(networkCreateSchema),
    defaultValues: {
      name: "",
    },
    disabled: isLoading,
  });

  function onSubmit(data: TvCreate) {
    setIsLoading(true);
    const toastId = toast.loading("Adding Network...");

    add(data)
      .then(() => {
        toast.success("Network Added!", {
          id: toastId,
        });

        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Failed to add Network!", {
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
              <FormLabel>Network Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    placeholder="Enter network name"
                    {...field}
                    className="pl-10"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add Network
        </Button>
      </form>
    </Form>
  );
}
