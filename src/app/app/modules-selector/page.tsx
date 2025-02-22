"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import ModulesSelectorForm from "~/components/modules-selector/form"
import { type ModulesSelector, modulesSelectorSchema } from "~/lib/validations/modules-selector"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

export default function ModulesSelectorPage() {
    const form = useForm<ModulesSelector>({
        resolver: zodResolver(modulesSelectorSchema),
        defaultValues: {
            modules: [],
        },
    })

    function onSubmit(values: ModulesSelector) {
        toast("You have successfully chosen your modules!")
    }

    return (
        <div className="w-full h-screen">
            <Card className="w-full h-full rounded-none flex flex-col justify-center items-center">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Select Your Learning Modules</CardTitle>
                    <CardDescription className="text-center">
                        Choose the modules you&apos;d like to include in your learning journey
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ModulesSelectorForm form={form} onSubmit={onSubmit} />
                </CardContent>
            </Card>
        </div>
    )
}

