"use client";

import { useState } from "react";
import TvCard from "~/components/equipment/card";
import EquipmentCreateDialog from "~/components/equipment/dialog";
import TvStatisticsPanel from "~/components/equipment/statisctics";
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
import { useGetAllEquipmentQuery } from "~/hooks/api/equipment/use-get-all-equipment-query";
import { type EquipmentResponse } from "~/lib/validations/equipment";

export default function EquipmentPage() {
  const { data: equipmentData, isLoading } = useGetAllEquipmentQuery({});
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentResponse | null>(null);

  if (isLoading || !equipmentData) {
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
              <BreadcrumbLink
                href="#"
                onClick={() => setSelectedEquipment(null)}
              >
                Equipment Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {selectedEquipment ? selectedEquipment.name : "Overview"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex w-full flex-1 flex-col gap-4 p-4">
        <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
          Your Equipment
        </h2>
        <div className="grid w-full auto-rows-min gap-4 md:grid-cols-3">
          <EquipmentCreateDialog />
          {equipmentData.map((equipment) => (
            <TvCard
              key={equipment.id}
              equipment={equipment}
              onClick={() => setSelectedEquipment(equipment)}
            />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
            Statistics
          </h2>
          <TvStatisticsPanel
            equipmentData={equipmentData}
            selectedEquipment={selectedEquipment}
          />
        </div>
      </div>
    </SidebarInset>
  );
}
