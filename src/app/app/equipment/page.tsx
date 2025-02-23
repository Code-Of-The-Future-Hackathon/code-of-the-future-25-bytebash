"use client";

import { useState } from "react";
import EquipmentCard from "~/components/equipment/card";
import EquipmentCreateDialog from "~/components/equipment/dialog";
import EquipmentStatisticsPanel from "~/components/equipment/statistics";
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
    <div className="flex">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 p-4">
        <EquipmentCreateDialog />
        {equipmentData.map((equipment) => (
          <EquipmentCard
            key={equipment.id}
            equipment={equipment}
            onClick={() => setSelectedEquipment(equipment)}
          />
        ))}
      </div>
      <div className="h-full w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <EquipmentStatisticsPanel
          equipmentData={equipmentData}
          selectedEquipment={selectedEquipment}
        />
      </div>
    </div>
  );
}
