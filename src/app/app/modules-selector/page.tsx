"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ModulesSelectorForm from "~/components/modules-selector/form";
import {
    ModulesSelector,
    modulesSelectorSchema,
} from "~/lib/validations/modules-selector";

export default function ModulesSelectorPage() {
    const form = useForm<ModulesSelector>({
        resolver: zodResolver(modulesSelectorSchema),
        defaultValues: {
            modules: [],
        },
    });

    function onSubmit(values: ModulesSelector) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-full max-w-md rounded-md bg-primary p-4">
                    <code className="text-white">
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <div className="mt-8 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Select Modules
            </h1>
            <ModulesSelectorForm form={form} onSubmit={onSubmit} />
        </div>
    );
}
