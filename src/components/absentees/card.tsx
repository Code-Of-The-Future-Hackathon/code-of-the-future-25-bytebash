import { UsersRound } from "lucide-react";
import { AbsenteeResponse } from "~/lib/validations/absentee";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AbsenteerDeleteAlert from "./delete-alert";

export default function AbsenteeCard({
  absentee,
  onClick,
}: {
  absentee: AbsenteeResponse;
  onClick: () => void;
}) {
  return (
    <div className={"w-full"}>
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md"
        onClick={onClick}
      >
        <CardHeader>
          <CardTitle>{absentee.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="flex items-center text-sm text-muted-foreground">
              <UsersRound className="mr-2 h-4 w-4" />
              Classname: {absentee.className}
            </p>
            <p className="text-lg font-semibold">
            {new Date(absentee.classStart * 1000).toLocaleTimeString()} - {new Date(absentee.classEnd * 1000).toLocaleTimeString()}
            </p>
            <div className="flex justify-end">
              <AbsenteerDeleteAlert id={absentee.id} />
            </div>
          </div>
        </CardContent>
        <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
      </Card>
    </div>
  );
}
