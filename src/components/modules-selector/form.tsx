import {
  BookOpen,
  Fan,
  Headphones,
  Lightbulb,
  Shield,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import React from "react";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

type ModulesSelectorFormProps = {
  form: UseFormReturn<{ modules: string[] }>;
  onSubmit: (values: { modules: string[] }) => void;
};
// ICONS
const modules = [
  {
    id: "computers",
    label: "Computers",
    icon: BookOpen,
    description: "Access all computers in your school.",
  },
  {
    id: "perifery",
    label: "Peripherals",
    icon: Headphones,
    description: "Access TVs, headphones, mice, etc.",
  },
  {
    id: "lights",
    label: "Lights",
    icon: Lightbulb,
    description: "Control all lighting fixtures.",
  },
  {
    id: "absentees",
    label: "Absentees",
    icon: Users,
    description: "View absentee information.",
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    description: "Manage cameras, alarms, and doors.",
  },
  {
    id: "hygiene-food",
    label: "Hygiene & Food",
    icon: Utensils,
    description: "Access cafeteria and sanitation data.",
  },
  {
    id: "wifi",
    label: "Wi-Fi",
    icon: Wifi,
    description: "Manage routers, access points, and switches.",
  },
  {
    id: "ventilation-heating",
    label: "Ventilation & Heating",
    icon: Fan,
    description: "Control ventilation and heating devices.",
  },
];

export default function ModulesSelectorForm({
  form,
  onSubmit,
}: ModulesSelectorFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <FormField
              key={module.id}
              control={form.control}
              name="modules"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Card className="transition-colors hover:bg-secondary/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <Checkbox
                            checked={field.value?.includes(module.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, module.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== module.id,
                                    ),
                                  );
                            }}
                          />
                          <div>
                            <FormLabel className="flex items-center space-x-2 font-semibold">
                              {React.createElement(module.icon, {
                                className: "w-5 h-5 text-primary",
                              })}
                              <span>{module.label}</span>
                            </FormLabel>
                            <p className="text-sm text-muted-foreground">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button type="submit" className="w-full rounded-xl">
          Start My Learning Journey
        </Button>
      </form>
    </Form>
  );
}
