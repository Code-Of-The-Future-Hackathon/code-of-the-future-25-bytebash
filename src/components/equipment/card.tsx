import { Clock, Power, Tag } from "lucide-react";
import EquipmentDeleteAlert from "~/components/equipment/delete-alert";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { type EquipmentResponse } from "~/lib/validations/equipment";

export default function EquipmentCard({
  equipment,
  onClick,
}: {
  equipment: EquipmentResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative w-full max-w-[350px] cursor-pointer overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <Badge
        className="absolute right-2 top-2 p-2"
        variant={equipment.status ? "success" : "destructive"}
      >
        {equipment.status ? "ON" : "OFF"}
      </Badge>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Power
            className={cn(
              "mr-2 size-6 text-muted-foreground",
              equipment.status && "text-success",
            )}
          />
          <span>{equipment.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-end gap-2 text-muted-foreground">
        <div className="flex items-center">
          <Clock className="mr-1 size-6 shrink-0" />
          Usage: {equipment.usage} hours
        </div>
        <div className="flex items-center">
          <Tag className="mr-1 size-6 shrink-0" />
          Type: <Badge className="ml-1">{equipment.type}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-2 right-2">
          <EquipmentDeleteAlert id={equipment.id} />
        </div>
      </CardFooter>
      <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}
