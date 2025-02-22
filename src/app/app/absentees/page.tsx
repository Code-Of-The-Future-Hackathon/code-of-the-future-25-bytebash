"use client";

import { useState } from "react";
import AbsenteeCard from "~/components/absentees/card";
import AbsenteeStatisticsPanel from "~/components/absentees/statistics";
import { useGetAllAbsenteesQuery } from "~/hooks/api/absentee/use-get-all-absentees-query";
import { type AbsenteeResponse } from "~/lib/validations/absentee";

export default function AbsenteesPage() {
  const { data: absentees, isLoading } = useGetAllAbsenteesQuery({});
  const [selectedAbsentee, setSelectedAbsentee] =
    useState<AbsenteeResponse | null>(null);

  if (isLoading || !absentees) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 p-4">
        {absentees.map((absentee) => (
          <AbsenteeCard
            key={absentee.id}
            absentee={absentee}
            onClick={() => setSelectedAbsentee(absentee)}
          />
        ))}
      </div>
      <div className="w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <AbsenteeStatisticsPanel
          absentees={absentees}
          selectedAbsentee={selectedAbsentee}
        />
      </div>
    </div>
  );
}
