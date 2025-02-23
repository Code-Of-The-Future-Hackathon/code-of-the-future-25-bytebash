"use client";

import { formatDistanceToNow, intlFormat } from "date-fns";
import { Calendar, Clock, Info, Lamp, Power, Tag } from "lucide-react";
import * as React from "react";
import { StatisticsCard } from "~/components/statistics-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { type LampsResponse } from "~/lib/validations/lamps";

interface StatisticsPanelProps {
  lamps: LampsResponse[];
  selectedLamp: LampsResponse | null;
}

export default function LampStatisticsPanel({
  lamps,
  selectedLamp,
}: StatisticsPanelProps) {
  const totalUsage = lamps.reduce(
    (sum, computer) => sum + parseFloat(computer.usage),
    0,
  );
  const activeLamps = lamps.filter((lamp) => lamp.status).length;

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
                title="Total Lamps"
                value={lamps.length}
                icon={<Lamp className="size-4" />}
              />
              <StatisticsCard
                title="Total Usage"
                value={`${totalUsage} hours`}
                icon={<Clock className="size-4" />}
              />
              <StatisticsCard
                title="Active Lamps"
                value={activeLamps}
                icon={<Power className="size-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedLamp ? (
              <div className="space-y-4">
                <StatisticsCard
                  title="Lamp Name"
                  value={selectedLamp.name}
                  icon={<Info className="size-4" />}
                />
                <StatisticsCard
                  title="Status"
                  value={selectedLamp.status ? "ON" : "OFF"}
                  icon={
                    <Power
                      className={cn(
                        "size-4 text-destructive",
                        selectedLamp.status && "text-success",
                      )}
                    />
                  }
                />
                <StatisticsCard
                  title="Group Name"
                  value={selectedLamp.groupName}
                  icon={<Tag className="size-4" />}
                ></StatisticsCard>
                <StatisticsCard
                  title="Usage"
                  value={`${selectedLamp.usage} hours`}
                  icon={<Clock className="size-4" />}
                />
                <StatisticsCard
                  title="Last Turn On"
                  value={
                    selectedLamp.lastTurnOnAt
                      ? formatDistanceToNow(selectedLamp.lastTurnOnAt * 1000, {
                          addSuffix: true,
                        })
                      : "N/A"
                  }
                  icon={<Calendar className="size-4" />}
                />
                <StatisticsCard
                  title="Created At"
                  value={intlFormat(selectedLamp.createdAt * 1000)}
                  icon={<Calendar className="size-4" />}
                />
              </div>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>PLEASE SELECT A LAMP</CardTitle>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
