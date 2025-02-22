"use client";

import { useState } from "react";
import NetworkCard from "~/components/networks/card";
import NetworkCreateDialog from "~/components/networks/dialog";
import NetworkStatisticsPanel from "~/components/networks/statistics";
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
import { useGetAllNetworksQuery } from "~/hooks/api/networks/use-get-all-networks-query";
import { type NetworkResponse } from "~/lib/validations/network";

export default function NetworksPage() {
  const { data: networks, isLoading } = useGetAllNetworksQuery({});
  const [selectedNetwork, setSelectedNetwork] =
    useState<NetworkResponse | null>(null);

  if (isLoading || !networks) {
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
              <BreadcrumbLink href="#" onClick={() => setSelectedNetwork(null)}>
                Networks Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {selectedNetwork ? selectedNetwork.name : "Overview"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex w-full flex-1 flex-col gap-4 p-4">
        <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
          Your Networks
        </h2>
        <div className="grid w-full auto-rows-min gap-4 md:grid-cols-3">
          <NetworkCreateDialog />
          {networks.map((network) => (
            <NetworkCard
              key={network.id}
              network={network}
              onClick={() => setSelectedNetwork(network)}
            />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
            Statistics
          </h2>
          <NetworkStatisticsPanel
            networks={networks}
            selectedNetwork={selectedNetwork}
          />
        </div>
      </div>
    </SidebarInset>
  );
}
