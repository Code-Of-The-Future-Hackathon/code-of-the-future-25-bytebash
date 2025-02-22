import { Clock, Power } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TvResponse } from "~/lib/validations/tv";
import TvDeleteAlert from "./delete-alert";

export default function TvCard({
  tv,
  onClick,
}: {
  tv: TvResponse;
  onClick: () => void;
}) {
  return (
    <div className={"w-full"}>
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md"
        onClick={onClick}
      >
        <div className="absolute right-0 top-0 p-2">
          <Badge variant={tv.status ? "success" : "secondary"}>
            {tv.status ? "On" : "Off"}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center space-x-2">
            <Power
              className={`h-5 w-5 ${tv.status ? "text-green-500" : "text-gray-400"}`}
            />
            <span>{tv.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              Usage: {tv.usage} hours
            </p>
            <p className="text-sm text-muted-foreground">
              Last Active: {new Date(tv.updatedAt).toLocaleString()}
            </p>
            <div className="flex justify-end">
              <TvDeleteAlert id={tv.id} />
            </div>
          </div>
        </CardContent>
        <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
      </Card>
    </div>
  );
}
