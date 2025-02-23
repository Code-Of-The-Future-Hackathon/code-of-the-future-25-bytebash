import { Activity, ArrowDownUp, Globe, Power } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { type NetworkResponse } from "~/lib/validations/network";
import NetworkDeleteAlert from "./delete-alert";

export default function NetworkCard({
  network,
  onClick,
}: {
  network: NetworkResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative h-fit w-full max-w-[350px] cursor-pointer overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <Badge
        className="absolute right-2 top-2 p-2"
        variant={network.status ? "success" : "destructive"}
      >
        {network.status ? "ON" : "OFF"}
      </Badge>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Power
            className={cn(
              "mr-2 size-6 text-muted-foreground",
              network.status && "text-success",
            )}
          />
          <span>{network.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-end gap-2 text-muted-foreground">
        <div className="flex items-center">
          <ArrowDownUp className="mr-1 size-6 shrink-0" />
          Traffic:{" "}
          <span className="ml-1 text-primary">{network.traffic} GB</span>
        </div>
        {network.ispName && (
          <div className="flex items-center">
            <Globe className="mr-1 size-6 shrink-0" />
            ISP Name:{" "}
            <span className="ml-1 text-primary">{network.ispName}</span>
          </div>
        )}
        {network.wanUptime && (
          <div className="flex items-center">
            <Activity className="mr-1 size-6 shrink-0" />
            WAN Uptime:{" "}
            <span className="ml-1 text-primary">{network.wanUptime} %</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-2 right-2">
          <NetworkDeleteAlert id={network.id} />
        </div>
      </CardFooter>
      <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}
