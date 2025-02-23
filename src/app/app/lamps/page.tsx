"use client";

import { useState } from "react";
import LampCard from "~/components/lamps/card";
import LampCreateDialog from "~/components/lamps/dialog";
import LampStatisticsPanel from "~/components/lamps/statistics";
import { useGetAllLampsQuery } from "~/hooks/api/lamps/use-get-all-lamps-query";
import { type LampsResponse } from "~/lib/validations/lamps";

export default function LampsPage() {
  const { data: lamps, isLoading } = useGetAllLampsQuery({});
  const [selectedLamp, setSelectedLamp] = useState<LampsResponse | null>(null);

  if (isLoading || !lamps) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 p-4">
        <LampCreateDialog />
        {lamps.map((lamp) => (
          <LampCard
            key={lamp.id}
            lamp={lamp}
            onClick={() => setSelectedLamp(lamp)}
          />
        ))}
      </div>
      <div className="w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <LampStatisticsPanel lamps={lamps} selectedLamp={selectedLamp} />
      </div>
    </div>
  );
}
