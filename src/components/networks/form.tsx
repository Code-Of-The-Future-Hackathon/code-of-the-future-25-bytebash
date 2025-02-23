"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Key, Network } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useCreateNetworkMutation } from "~/hooks/api/networks/use-create-network-mutation";
import {
  type NetworkCreate,
  networkCreateSchema,
} from "~/lib/validations/network";

interface NetworkCreateFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

const networkTypes = ["Gateway", "Access Point", "Switch"];

export default function NetworkCreateForm({
  setIsOpen,
}: NetworkCreateFormProps) {
  const { mutateAsync: add } = useCreateNetworkMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<NetworkCreate>({
    resolver: zodResolver(networkCreateSchema),
    defaultValues: {
      name: "",
      type: "Gateway",
      apiKey: null,
    },
    disabled: isLoading,
  });

  function onSubmit(data: NetworkCreate) {
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
        toast.error("Failed to add network!", {
          id: toastId,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const selectedType = form.watch("type");

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
                  {networkTypes.map((type) => (
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
        {selectedType === "Gateway" && (
          <FormField
            control={form.control}
            name="apiKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubiquiti API Key</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                    <Input
                      placeholder="Enter API key"
                      {...field}
                      className="pl-10"
                      value={field.value ?? ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="w-full">
          Add Network
        </Button>
      </form>
    </Form>
  );
}
