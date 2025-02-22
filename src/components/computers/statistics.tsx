"use client";

import { formatDistanceToNow, intlFormat } from "date-fns";
import {
  Battery,
  Calendar,
  Clock,
  Cpu,
  Info,
  Monitor,
  Power,
} from "lucide-react";
import * as React from "react";
import { StatisticsCard } from "~/components/statistics-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { type ComputerResponse } from "~/lib/validations/computer";

interface StatisticsPanelProps {
  computers: ComputerResponse[];
  selectedComputer: ComputerResponse | null;
}

export default function ComputerStatisticsPanel({
  computers,
  selectedComputer,
}: StatisticsPanelProps) {
  const totalUsage = computers
    .filter((computer) => computer.status)
    .reduce((sum, computer) => sum + parseFloat(computer.usage), 0);
  const activeComputers = computers.filter(
    (computer) => computer.status,
  ).length;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="total">
          <TabsList className="grid w-full grid-cols-2 bg-muted-foreground/30">
            <TabsTrigger value="total">Total</TabsTrigger>
            <TabsTrigger value="selected">Selected</TabsTrigger>
          </TabsList>
          <TabsContent value="total">
            <div className="space-y-4">
              <StatisticsCard
                title="Total Computers"
                value={computers.length}
                icon={<Monitor className="size-4" />}
              />
              <StatisticsCard
                title="Average CPU Usage"
                value={`${(totalUsage / activeComputers).toFixed(2)} %`}
                icon={<Clock className="size-4" />}
              />
              <StatisticsCard
                title="Active Computers"
                value={activeComputers}
                icon={<Power className="size-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedComputer ? (
              <div className="space-y-4">
                <StatisticsCard
                  title="Computer Name"
                  value={selectedComputer.name}
                  icon={<Info className="size-4" />}
                />
                <StatisticsCard
                  title="Status"
                  value={selectedComputer.status ? "ON" : "OFF"}
                  icon={
                    <Power
                      className={cn(
                        "size-4 text-destructive",
                        selectedComputer.status && "text-success",
                      )}
                    />
                  }
                />
                <StatisticsCard
                  title="CPU Usage"
                  value={`${selectedComputer.usage} %`}
                  icon={<Cpu className="size-4" />}
                />
                <StatisticsCard
                  title="Battery"
                  value={`${selectedComputer.battery} %`}
                  icon={<Battery className="size-4" />}
                />
                <StatisticsCard
                  title="Last Turn On"
                  value={
                    selectedComputer.lastTurnOnAt
                      ? formatDistanceToNow(
                          selectedComputer.lastTurnOnAt * 1000,
                          {
                            addSuffix: true,
                          },
                        )
                      : "N/A"
                  }
                  icon={<Clock className="size-4" />}
                />
                <StatisticsCard
                  title="Created At"
                  value={intlFormat(selectedComputer.createdAt * 1000)}
                  icon={<Calendar className="size-4" />}
                />
              </div>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>PLEASE SELECT A COMPUTER</CardTitle>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
