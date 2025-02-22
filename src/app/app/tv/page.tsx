"use client";

import { useState } from "react";
import TvCard from "~/components/tvs/card";
import TvCreateDialog from "~/components/tvs/dialog";
import TvStatisticsPanel from "~/components/tvs/statisctics";
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
import { useGetAllTvsQuery } from "~/hooks/api/tv/use-get-all-tvs-query";
import { TvResponse } from "~/lib/validations/tv";

export default function TVPage() {
  const { data: tvs, isLoading } = useGetAllTvsQuery({});
  const [selectedTv, setSelectedComputer] = useState<TvResponse | null>(null);

  if (isLoading || !tvs) {
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
                onClick={() => setSelectedComputer(null)}
              >
                Tvs Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {selectedTv ? selectedTv.name : "Overview"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex w-full flex-1 flex-col gap-4 p-4">
        <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
          Your Tvs
        </h2>
        <div className="grid w-full auto-rows-min gap-4 md:grid-cols-3">
          <TvCreateDialog />
          {tvs.map((tv) => (
            <TvCard
              key={tv.id}
              tv={tv}
              onClick={() => setSelectedComputer(tv)}
            />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="py-10 text-center text-3xl font-semibold tracking-tight">
            Statistics
          </h2>
          <TvStatisticsPanel tvs={tvs} selectedTv={selectedTv} />
        </div>
      </div>
    </SidebarInset>
  );
}
