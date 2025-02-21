"use client";

import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { ComputerResponse } from "~/lib/validations/computer";

const computers: ComputerResponse[] = [
    {
        id: "1",
        name: "Computer A",
        usage: 150,
        status: true,
        lastTurnOnAt: new Date().getTime(),
        ownerId: "12",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
    },
    {
        id: "2",
        name: "Computer B",
        usage: 200,
        status: false,
        lastTurnOnAt: new Date().getTime() - 86400000, // 1 day ago
        ownerId: "13",
        createdAt: new Date().getTime() - 7 * 86400000, // 7 days ago
        updatedAt: new Date().getTime() - 86400000,
    },
    {
        id: "3",
        name: "Computer C",
        usage: 100,
        status: true,
        lastTurnOnAt: new Date().getTime(),
        ownerId: "14",
        createdAt: new Date().getTime() - 14 * 86400000, // 14 days ago
        updatedAt: new Date().getTime(),
    },
];

interface StatisticsPanelProps {
    selectedComputer: ComputerResponse | null;
}

function StatisticsPanel({ selectedComputer }: StatisticsPanelProps) {
    if (!selectedComputer) {
        // Show total statistics
        const totalUsage = computers.reduce(
            (sum, computer) => sum + computer.usage,
            0,
        );
        const activeComputers = computers.filter(
            (computer) => computer.status,
        ).length;

        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Total Statistics</h2>
                <p>Total Computers: {computers.length}</p>
                <p>Total Usage: {totalUsage} hours</p>
                <p>Active Computers: {activeComputers}</p>
            </div>
        );
    }

    // Show individual computer statistics
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                {selectedComputer.name} Statistics
            </h2>
            <p>ID: {selectedComputer.id}</p>
            <p>Usage: {selectedComputer.usage} hours</p>
            <p>Status: {selectedComputer.status ? "On" : "Off"}</p>
            <p>
                Last Turn On:{" "}
                {new Date(selectedComputer.lastTurnOnAt).toLocaleString()}
            </p>
            <p>Owner ID: {selectedComputer.ownerId}</p>
            <p>
                Created At:{" "}
                {new Date(selectedComputer.createdAt).toLocaleString()}
            </p>
            <p>
                Updated At:{" "}
                {new Date(selectedComputer.updatedAt).toLocaleString()}
            </p>
        </div>
    );
}

function ComputerCard({
    computer,
    onClick,
}: {
    computer: ComputerResponse;
    onClick: () => void;
}) {
    return (
        <Card className="cursor-pointer hover:bg-gray-100" onClick={onClick}>
            <CardHeader>
                <CardTitle>{computer.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Status: {computer.status ? "On" : "Off"}</p>
                <p>Usage: {computer.usage} hours</p>
                <p>
                    Last Active:{" "}
                    {new Date(computer.lastTurnOnAt).toLocaleString()}
                </p>
            </CardContent>
        </Card>
    );
}
export default function Page() {
    const [selectedComputer, setSelectedComputer] =
        useState<ComputerResponse | null>(null);

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
            <div className="flex flex-1 flex-col gap-4 p-4">
                <StatisticsPanel selectedComputer={selectedComputer} />
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {computers.map((computer) => (
                        <ComputerCard
                            key={computer.id}
                            computer={computer}
                            onClick={() => setSelectedComputer(computer)}
                        />
                    ))}
                </div>
            </div>
        </SidebarInset>
    );
}
