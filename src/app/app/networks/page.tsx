"use client";

import { useState } from "react";
import NetworkCard from "~/components/networks/card";
import NetworkCreateDialog from "~/components/networks/dialog";
import NetworkStatisticsPanel from "~/components/networks/statistics";
import { useGetAllNetworksQuery } from "~/hooks/api/networks/use-get-all-networks-query";
import { type NetworkResponse } from "~/lib/validations/network";

export default function NetworksPage() {
  const { data: networks, isLoading } = useGetAllNetworksQuery({
    refetchInterval: 1000,
  });
  const [selectedNetwork, setSelectedNetwork] =
    useState<NetworkResponse | null>(null);

  if (isLoading || !networks) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 p-4">
        <NetworkCreateDialog />
        {networks.map((network) => (
          <NetworkCard
            key={network.id}
            network={network}
            onClick={() => setSelectedNetwork(network)}
          />
        ))}
      </div>
      <div className="w-full max-w-[360px] border-l bg-sidebar-border p-4 px-2">
        <NetworkStatisticsPanel
          networks={networks}
          selectedNetwork={selectedNetwork}
        />
      </div>
    </div>
  );
}
