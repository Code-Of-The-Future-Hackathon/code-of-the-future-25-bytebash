"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AirVent,
  Fan,
  Monitor,
  Presentation,
  Projector,
  Speaker,
  Tv,
} from "lucide-react";
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
import { useCreateEquipmentMutation } from "~/hooks/api/equipment/use-create-equipment-mutation";
import {
  type EquipmentCreate,
  equipmentCreateSchema,
} from "~/lib/validations/equipment";

interface EquipmentCreateFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function EquipmentCreateForm({
  setIsOpen,
}: EquipmentCreateFormProps) {
  const { mutateAsync: add } = useCreateEquipmentMutation();

  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<EquipmentCreate>({
    resolver: zodResolver(equipmentCreateSchema),
    defaultValues: {
      name: "",
      type: "TV",
    },
    disabled: isLoading,
  });

  function onSubmit(data: EquipmentCreate) {
    setIsLoading(true);
    const toastId = toast.loading(`Adding ${data.type}...`);

    add(data)
      .then(() => {
        toast.success(`${data.type} Added!`, {
          id: toastId,
        });

        setIsOpen(false);
      })
      .catch(() => {
        toast.error(`Failed to add ${data.type}!`, {
          id: toastId,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const equipmentTypes = [
    { value: "TV", icon: Tv },
    { value: "Air Conditioner", icon: AirVent },
    { value: "Projector", icon: Projector },
    { value: "Sound", icon: Speaker },
    { value: "Ventilation", icon: Fan },
    { value: "Smart Board", icon: Presentation },
  ];

  const selectedType = form.watch("type");
  const SelectedIcon =
    equipmentTypes.find((type) => type.value === selectedType)?.icon || Monitor;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Equipment Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <SelectedIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                  <Input
                    placeholder={`Enter ${selectedType} name`}
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
              <FormLabel>Equipment Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {equipmentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center">
                        <type.icon className="mr-2 h-4 w-4" />
                        {type.value}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Add Equipment
        </Button>
      </form>
    </Form>
  );
}
