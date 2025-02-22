import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UseFormReturn } from "react-hook-form";

type ComputerCreateFormProps = {
    form: UseFormReturn<{ name: string }, any, undefined>;
    onSubmit: (values: { name: string }) => void;
};

export default function ComputerCreateForm({form, onSubmit}:ComputerCreateFormProps) {
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Computer Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter computer name"
                                    {...field}
                                />
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
