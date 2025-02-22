import { Calendar, Clock, Info, Monitor, Power, User } from "lucide-react";
import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { NetworkResponse } from "~/lib/validations/network";

interface StatisticsPanelProps {
  networks: NetworkResponse[];
  selectedNetwork: NetworkResponse | null;
}
export default function NetworkStatisticsPanel({
  networks,
  selectedNetwork,
}: StatisticsPanelProps) {
  const totalTraffic = networks.reduce(
    (sum, network) => sum + Number.parseInt(network.traffic),
    0,
  );
  const activeComputers = networks.filter((network) => network.status).length;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={selectedNetwork ? "selected" : "total"}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="total">Total</TabsTrigger>
            <TabsTrigger value="selected" disabled={!selectedNetwork}>
              Selected
            </TabsTrigger>
          </TabsList>
          <TabsContent value="total">
            <div className="space-y-4">
              <StatCard
                title="Total Computers"
                value={networks.length}
                icon={<Monitor className="h-4 w-4" />}
              />
              <StatCard
                title="Total Usage"
                value={`${totalTraffic} hours`}
                icon={<Clock className="h-4 w-4" />}
              />
              <StatCard
                title="Active Computers"
                value={activeComputers}
                icon={<Power className="h-4 w-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedNetwork && (
              <div className="space-y-4">
                <StatCard
                  title="Computer Name"
                  value={selectedNetwork.name}
                  icon={<Info className="h-4 w-4" />}
                />
                <StatCard
                  title="Usage"
                  value={`${selectedNetwork.traffic} GB`}
                  icon={<Clock className="h-4 w-4" />}
                />
                <StatCard
                  title="Status"
                  value={selectedNetwork.status ? "On" : "Off"}
                  icon={<Power className="h-4 w-4" />}
                />
                <StatCard
                  title="Last Turn On"
                  value={new Date(selectedNetwork.updatedAt).toLocaleString()}
                  icon={<Calendar className="h-4 w-4" />}
                />
                <StatCard
                  title="Owner ID"
                  value={selectedNetwork.ownerId}
                  icon={<User className="h-4 w-4" />}
                />
                <StatCard
                  title="Created At"
                  value={new Date(selectedNetwork.createdAt).toLocaleString()}
                  icon={<Calendar className="h-4 w-4" />}
                />
                <StatCard
                  title="Updated At"
                  value={new Date(selectedNetwork.updatedAt!).toLocaleString()}
                  icon={<Calendar className="h-4 w-4" />}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">{icon}</div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
