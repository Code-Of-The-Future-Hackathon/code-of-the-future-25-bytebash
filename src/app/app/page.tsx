"use client";

import { useState } from "react";
import ComputerCard from "~/components/computers/card";
import ComputerCreateDialog from "~/components/computers/dialog";
import StatisticsPanel from "~/components/computers/statistics";
import { useGetAllComputersQuery } from "~/hooks/api/computers/use-get-all-computers-query";
import { type ComputerResponse } from "~/lib/validations/computer";

export default function ComputersPage() {
  const { data: computers, isLoading } = useGetAllComputersQuery({});
  const [selectedComputer, setSelectedComputer] =
    useState<ComputerResponse | null>(null);

  if (isLoading || !computers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 p-4">
        <ComputerCreateDialog />
        {computers.map((computer) => (
          <ComputerCard
            key={computer.id}
            computer={computer}
            onClick={() => setSelectedComputer(computer)}
          />
        ))}
      </div>
      <div className="w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <StatisticsPanel
          computers={computers}
          selectedComputer={selectedComputer}
        />
      </div>
    </div>
  );
}
