import { Calendar, Clock, Info, Monitor, Power, Tag, User } from "lucide-react";
import type React from "react";
import { StatisticsCard } from "~/components/statistics-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { type EquipmentResponse } from "~/lib/validations/equipment";

interface StatisticsPanelProps {
  equipmentData: EquipmentResponse[];
  selectedEquipment: EquipmentResponse | null;
}
export default function EquipmentStatisticsPanel({
  equipmentData,
  selectedEquipment,
}: StatisticsPanelProps) {
  const totalUsage = equipmentData.reduce(
    (sum, equipment) => sum + parseFloat(equipment.usage),
    0,
  );
  const activeEquipment = equipmentData.filter(
    (equipment) => equipment.status,
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
                title="Total Equipment"
                value={equipmentData.length}
                icon={<Monitor className="size-4" />}
              />
              <StatisticsCard
                title="Total Usage"
                value={`${totalUsage} hours`}
                icon={<Clock className="size-4" />}
              />
              <StatisticsCard
                title="Active Equipment"
                value={activeEquipment}
                icon={<Power className="size-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedEquipment ? (
              <div className="space-y-4">
                <StatisticsCard
                  title="Equipment Name"
                  value={selectedEquipment.name}
                  icon={<Info className="size-4" />}
                />
                <StatisticsCard
                  title="Status"
                  value={selectedEquipment.status ? "ON" : "OFF"}
                  icon={
                    <Power
                      className={cn(
                        "size-4 text-destructive",
                        selectedEquipment.status && "text-success",
                      )}
                    />
                  }
                />
                <StatisticsCard
                  title="Usage"
                  value={`${selectedEquipment.usage} hours`}
                  icon={<Clock className="size-4" />}
                />
                <StatisticsCard
                  title="Type"
                  value={selectedEquipment.type}
                  icon={<Tag className="size-4" />}
                />
                <StatisticsCard
                  title="Created At"
                  value={new Date(selectedEquipment.createdAt).toLocaleString()}
                  icon={<Calendar className="size-4" />}
                />
              </div>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>PLEASE SELECT AN EQUIPMENT</CardTitle>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
