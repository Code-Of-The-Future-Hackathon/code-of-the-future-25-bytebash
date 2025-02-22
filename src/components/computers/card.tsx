import { formatDistanceToNow } from "date-fns";
import { Calendar, Clock, Power } from "lucide-react";
import ComputerDeleteAlert from "~/components/computers/delete-alert";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { ComputerResponse } from "~/lib/validations/computer";

export default function ComputerCard({
  computer,
  onClick,
}: {
  computer: ComputerResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative w-full max-w-[350px] cursor-pointer overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <Badge
        className="absolute right-2 top-2 p-2"
        variant={computer.status ? "success" : "destructive"}
      >
        {computer.status ? "ON" : "OFF"}
      </Badge>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Power
            className={cn(
              "mr-2 size-6 text-muted-foreground",
              computer.status && "text-success",
            )}
          />
          <span>{computer.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-end gap-2 text-muted-foreground">
        <div className="flex items-center">
          <Clock className="mr-1 size-6 shrink-0" />
          CPU Usage:{" "}
          <span className="ml-1 text-primary">{computer.usage} %</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-1 size-6 shrink-0" />
          Last Active:{" "}
          <span className="ml-1 text-primary">
            {computer.updatedAt
              ? formatDistanceToNow(computer.updatedAt * 1000, {
                  addSuffix: true,
                })
              : "N/A"}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-2 right-2">
          <ComputerDeleteAlert id={computer.id} />
        </div>
      </CardFooter>
      <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}
