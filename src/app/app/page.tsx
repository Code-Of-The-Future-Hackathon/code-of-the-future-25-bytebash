"use client";

import * as React from "react";
import ComputerCard from "~/components/computers/card";
import ComputerCreateDialog from "~/components/computers/dialog";
import ComputerStatisticsPanel from "~/components/computers/statistics";
import { useGetAllComputersQuery } from "~/hooks/api/computers/use-get-all-computers-query";

export default function ComputersPage() {
  const { data: computers, isLoading } = useGetAllComputersQuery({
    refetchInterval: 1000,
  });
  const [selectedComputerId, setSelectedComputerId] = React.useState<
    string | null
  >(null);
  const selectedComputer = React.useMemo(
    () =>
      selectedComputerId
        ? (computers?.find((c) => c.id === selectedComputerId) ?? null)
        : null,
    [selectedComputerId, computers],
  );

  if (isLoading || !computers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full">
      <div className="flex h-fit w-full flex-wrap justify-center gap-4 p-4">
        <ComputerCreateDialog />
        {computers.map((computer) => (
          <ComputerCard
            key={computer.id}
            computer={computer}
            onClick={() => setSelectedComputerId(computer.id)}
          />
        ))}
      </div>
      <div className="w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <ComputerStatisticsPanel
          computers={computers}
          selectedComputer={selectedComputer}
        />
      </div>
    </div>
  );
}
