"use client";

import { useState } from "react";
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
import { useGetAllComputersQuery } from "~/hooks/api/computers/use-get-all-computers-query";
import { type ComputerResponse } from "~/lib/validations/computer";

export default function Page() {
  const { data: computers, isLoading } = useGetAllComputersQuery({});
  const [selectedComputer, setSelectedComputer] =
    useState<ComputerResponse | null>(null);

  if (isLoading || !computers) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarInset>
      <header className="w-full flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink
                href="#"
                onClick={() => setSelectedComputer(null)}
              >
                Computer Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {selectedComputer ? selectedComputer.name : "Overview"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="w-full flex flex-1 gap-4 p-4">
        <div className="w-full grid auto-rows-min gap-4 md:grid-cols-3">
          <ComputerCreateDialog />
          {computers.map((computer) => (
            <ComputerCard
              key={computer.id}
              computer={computer}
              onClick={() => setSelectedComputer(computer)}
            />
          ))}
        </div>
        <div className="w-full md:w-[350px] lg:w-[400px]">
          <div className="sticky top-20">
            <StatisticsPanel
                computers={computers}
                selectedComputer={selectedComputer}
            />
          </div>
        </div>
      </div>
    </SidebarInset>
  );
}
