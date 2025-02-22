"use client";

import { useState } from "react";
import AbsenteeCard from "~/components/absentees/card";
import AbsenteeStatisticsPanel from "~/components/absentees/statisctics";
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
import { useGetAllAbsenteesQuery } from "~/hooks/api/absentee/use-get-all-absentees-query";
import { AbsenteeResponse } from "~/lib/validations/absentee";

export default function AbsenteesPage() {
  const { data: absentees, isLoading } = useGetAllAbsenteesQuery({});
  const [selectedAbsentee, setSelectedAbsentee] =
    useState<AbsenteeResponse | null>(null);

  if (isLoading || !absentees) {
    return <div>Loading...</div>;
  }
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Absentees Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {selectedAbsentee ? selectedAbsentee.name : "Overview"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {absentees.map((absentee) => (
            <AbsenteeCard
              key={absentee.id}
              absentee={absentee}
              onClick={() => setSelectedAbsentee(absentee)}
            />
          ))}
        </div>
        <div className="flex-1">
          <AbsenteeStatisticsPanel
            absentees={absentees}
            selectedAbsentee={selectedAbsentee}
          />
        </div>
      </div>
    </SidebarInset>
  );
}
