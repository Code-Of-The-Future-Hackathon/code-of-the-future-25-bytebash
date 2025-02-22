import { formatDuration, intervalToDuration } from "date-fns";
import { Clock, User, Users } from "lucide-react";
import AbsenteeDeleteAlert from "~/components/absentees/delete-alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type AbsenteeResponse } from "~/lib/validations/absentee";

export default function AbsenteeCard({
  absentee,
  onClick,
}: {
  absentee: AbsenteeResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="group relative w-full max-w-[350px] cursor-pointer overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="mr-2 size-6 text-muted-foreground" />
          <span>{absentee.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-end gap-2 text-muted-foreground">
        <div className="flex items-center">
          <Users className="mr-1 size-6 shrink-0" />
          Class Name:{" "}
          <span className="ml-1 text-primary">{absentee.className}</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-1 size-6 shrink-0" />
          Class Period:{" "}
          <span className="ml-1 text-primary">
            {formatDuration(
              intervalToDuration({
                start: absentee.classStart * 1000,
                end: absentee.classEnd * 1000,
              }),
              {
                format: ["days", "hours", "minutes"],
                delimiter: ", ",
              },
            )}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-2 right-2">
          <AbsenteeDeleteAlert id={absentee.id} />
        </div>
      </CardFooter>
      <div className="h-1 w-full origin-left scale-x-0 transform bg-gradient-to-r from-primary to-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
    </Card>
  );
}
