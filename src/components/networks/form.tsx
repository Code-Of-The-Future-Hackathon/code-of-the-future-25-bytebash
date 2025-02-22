import { zodResolver } from "@hookform/resolvers/zod";
import { Monitor, Network } from "lucide-react";
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
import { useCreateEquipmentMutation } from "~/hooks/api/equipment/use-create-equipment-mutation";
import { NetworkCreate, networkCreateSchema } from "~/lib/validations/network";
import {
  EquipmentCreate,
  equipmentCreateSchema,
} from "~/lib/validations/equipment";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface NetworkCreateFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function NetworkCreateForm({
  setIsOpen,
}: NetworkCreateFormProps) {
  const { mutateAsync: add } = useCreateEquipmentMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<NetworkCreate>({
    resolver: zodResolver(networkCreateSchema),
    defaultValues: {
      name: "",
      type: "Gateway",
    },
    disabled: isLoading,
  });

  function onSubmit(data: EquipmentCreate) {
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
                  <Network className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
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
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Network Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select network type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Gateway", "Access Point", "Switch"].map((type) => (
                    <SelectItem key={type} value={type}>
                      <p>{type}</p>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
