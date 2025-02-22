import {
    BookOpen,
    Code,
    Globe,
    MessageSquare,
    PenTool,
    Video,
} from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";

type ModulesSelectorFormProps = {
    form: UseFormReturn<{ modules: string[] }, any, undefined>;
    onSubmit: (values: { modules: string[] }) => void;
};

const modules = [
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "coding", label: "Coding Exercises", icon: Code },
    { id: "community", label: "Community Forums", icon: MessageSquare },
    { id: "webinars", label: "Live Webinars", icon: Video },
    { id: "projects", label: "Practical Projects", icon: PenTool },
    { id: "resources", label: "Global Resources", icon: Globe },
];
export default function ModulesSelectorForm({
    form,
    onSubmit,
}: ModulesSelectorFormProps) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {modules.map((module) => (
                    <FormField
                        key={module.id}
                        control={form.control}
                        name="modules"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(
                                            module.id,
                                        )}
                                        onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([
                                                      ...field.value,
                                                      module.id,
                                                  ])
                                                : field.onChange(
                                                      field.value?.filter(
                                                          (value) =>
                                                              value !==
                                                              module.id,
                                                      ),
                                                  );
                                        }}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal flex items-center space-x-2">
                                    {React.createElement(module.icon, {
                                        className: "w-5 h-5 text-primary",
                                    })}
                                    <span>{module.label}</span>
                                </FormLabel>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
