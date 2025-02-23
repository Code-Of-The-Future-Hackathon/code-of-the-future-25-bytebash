import { intlFormat } from "date-fns";
import {
  Activity,
  ArrowDownUp,
  Calendar,
  Clock,
  Globe,
  Info,
  Monitor,
  Power,
  Tag,
} from "lucide-react";
import type React from "react";
import { StatisticsCard } from "~/components/statistics-card";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { type NetworkResponse } from "~/lib/validations/network";

interface StatisticsPanelProps {
  networks: NetworkResponse[];
  selectedNetwork: NetworkResponse | null;
}
export default function NetworkStatisticsPanel({
  networks,
  selectedNetwork,
}: StatisticsPanelProps) {
  const totalTraffic = networks.reduce(
    (sum, network) => sum + parseFloat(network.traffic),
    0,
  );
  const activeNetworks = networks.filter((network) => network.status).length;

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
                title="Total Networks"
                value={networks.length}
                icon={<Monitor className="size-4" />}
              />
              <StatisticsCard
                title="Total Traffic"
                value={`${totalTraffic} GB`}
                icon={<Clock className="size-4" />}
              />
              <StatisticsCard
                title="Active Networks"
                value={activeNetworks}
                icon={<Power className="size-4" />}
              />
            </div>
          </TabsContent>
          <TabsContent value="selected">
            {selectedNetwork ? (
              <div className="space-y-4">
                <StatisticsCard
                  title="Network Name"
                  value={selectedNetwork.name}
                  icon={<Info className="size-4" />}
                />
                <StatisticsCard
                  title="Status"
                  value={selectedNetwork.status ? "ON" : "OFF"}
                  icon={
                    <Power
                      className={cn(
                        "size-4 text-destructive",
                        selectedNetwork.status && "text-success",
                      )}
                    />
                  }
                />
                <StatisticsCard
                  title="Type"
                  value={selectedNetwork.type}
                  icon={<Tag className="size-4" />}
                />
                <StatisticsCard
                  title="Traffic"
                  value={`${selectedNetwork.traffic} GB`}
                  icon={<ArrowDownUp className="size-4" />}
                />
                {selectedNetwork.ispName && (
                  <StatisticsCard
                    title="ISP Name"
                    value={selectedNetwork.ispName}
                    icon={<Globe className="size-4" />}
                  />
                )}
                {selectedNetwork.ispOrganization && (
                  <StatisticsCard
                    title="ISP Organization"
                    value={selectedNetwork.ispOrganization}
                    icon={<Globe className="size-4" />}
                  />
                )}
                {selectedNetwork.txRetry && (
                  <StatisticsCard
                    title="TX Retry"
                    value={`${selectedNetwork.txRetry} %`}
                    icon={<ArrowDownUp className="size-4" />}
                  />
                )}
                {selectedNetwork.wanUptime && (
                  <StatisticsCard
                    title="WAN Uptime"
                    value={`${selectedNetwork.wanUptime} %`}
                    icon={<Activity className="size-4" />}
                  />
                )}
                <StatisticsCard
                  title="Created At"
                  value={intlFormat(selectedNetwork.createdAt * 1000)}
                  icon={<Calendar className="size-4" />}
                />
              </div>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>PLEASE SELECT A NETWORK</CardTitle>
                </CardHeader>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
