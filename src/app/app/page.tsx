"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ComputerCard from "~/components/computers/card";
import ComputerCreateDialog from "~/components/computers/dialog";
import StatisticsPanel from "~/components/computers/statisctics";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { computerCreateSchema, ComputerResponse } from "~/lib/validations/computer";

export default function Page() {
    const [computers, setComputers] = useState<ComputerResponse[]>([]);
    const [selectedComputer, setSelectedComputer] =
        useState<ComputerResponse | null>(null);

    const form = useForm<z.infer<typeof computerCreateSchema>>({
        resolver: zodResolver(computerCreateSchema),
        defaultValues: {
            name: "",
        },
    });

    function onSubmit(values: z.infer<typeof computerCreateSchema>) {
        console.log(values);
        form.reset();
    }

    return (
        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                                Computer Dashboard
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {selectedComputer
                                    ? selectedComputer.name
                                    : "Overview"}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
            <div className="flex flex-1 gap-4 p-4">
                {computers.length === 0 ? (
                    <ComputerCreateDialog form={form} onSubmit={onSubmit} />
                ) : (
                    <>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            (
                            {computers.map((computer) => (
                                <ComputerCard
                                    key={computer.id}
                                    computer={computer}
                                    onClick={() =>
                                        setSelectedComputer(computer)
                                    }
                                />
                            ))}
                            )
                        </div>
                        <div className="flex-1">
                            <StatisticsPanel
                                computers={computers}
                                selectedComputer={selectedComputer}
                            />
                        </div>
                    </>
                )}
            </div>
        </SidebarInset>
    );
}
