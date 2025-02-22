import { Calendar, Clock, Power, Tag } from "lucide-react";
import LampDeleteAlert from "~/components/lamps/delete-alert";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { LampsResponse } from "~/lib/validations/lamps";

export default function LampCard({
  lamp,
  onClick,
}: {
  lamp: LampsResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative w-full max-w-[360px] cursor-pointer overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <Badge
        className="absolute right-2 top-2 p-2"
        variant={lamp.status ? "success" : "destructive"}
      >
        {lamp.status ? "ON" : "OFF"}
      </Badge>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Power
            className={cn(
              "mr-2 size-6 text-muted-foreground",
              lamp.status && "text-success",
            )}
          />
          <span>{lamp.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-end gap-2 text-muted-foreground">
        <div className="flex items-center">
          <Tag className="mr-1 size-6 shrink-0" />
          Group Name: <Badge className="ml-1">{lamp.groupName}</Badge>
        </div>
        <div className="flex items-center">
          <Clock className="mr-1 size-6 shrink-0" />
          Usage: <span className="ml-1 text-primary">{lamp.usage} hours</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-1 size-6 shrink-0" />
          Last Active:{" "}
          <span className="ml-1 text-primary">
            {new Date(lamp.updatedAt).toLocaleString()}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-2 right-2">
          <LampDeleteAlert id={lamp.id} />
        </div>
      </CardFooter>
      <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}
