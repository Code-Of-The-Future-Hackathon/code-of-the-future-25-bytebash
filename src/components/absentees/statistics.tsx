"use client";

import { formatDuration, intervalToDuration, intlFormat } from "date-fns";
import { Calendar, Clock, Info, Monitor, UserMinus, Users } from "lucide-react";
import * as React from "react";
import { StatisticsCard } from "~/components/statistics-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { type AbsenteeResponse } from "~/lib/validations/absentee";

interface StatisticsPanelProps {
  absentees: AbsenteeResponse[];
  selectedAbsentee: AbsenteeResponse | null;
}

export default function AbsenteeStatisticsPanel({
  absentees,
  selectedAbsentee,
}: StatisticsPanelProps) {
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
                title="Total Absentees"
                value={absentees.length}
                icon={<UserMinus className="size-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedAbsentee ? (
              <div className="space-y-4">
                <StatisticsCard
                  title="Absentee Name"
                  value={selectedAbsentee.name}
                  icon={<Info className="size-4" />}
                />
                <StatisticsCard
                  title="Class Name"
                  value={selectedAbsentee.className}
                  icon={<Users className="size-4" />}
                />
                <StatisticsCard
                  title="Class Period"
                  value={formatDuration(
                    intervalToDuration({
                      start: selectedAbsentee.classStart * 1000,
                      end: selectedAbsentee.classEnd * 1000,
                    }),
                    {
                      format: ["days", "hours", "minutes"],
                      delimiter: ", ",
                    },
                  )}
                  icon={<Clock className="size-4" />}
                />
                <StatisticsCard
                  title="Class Start"
                  value={intlFormat(selectedAbsentee.classStart * 1000, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                  icon={<Calendar className="size-4" />}
                />
                <StatisticsCard
                  title="Class End"
                  value={intlFormat(selectedAbsentee.classEnd * 1000, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                  icon={<Calendar className="size-4" />}
                />
              </div>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>PLEASE SELECT AN ABSENTEE</CardTitle>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
