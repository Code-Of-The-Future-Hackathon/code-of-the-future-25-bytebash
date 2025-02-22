import { AbsenteeResponse } from "~/lib/validations/absentee";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AbsenteeCard({
  absentee,
  onClick,
}: {
  absentee: AbsenteeResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="aspect-video h-full w-full max-w-sm cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{absentee.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Classname: {absentee.className}</p>
        <p className="text-lg font-semibold">
          {absentee.classStart} - {absentee.classEnd}
        </p>
      </CardContent>
    </Card>
  );
}
