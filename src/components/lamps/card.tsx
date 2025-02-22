import { LampsResponse } from "~/lib/validations/lamps";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function LampCard({
  lamp,
  onClick,
}: {
  lamp: LampsResponse;
  onClick: () => void;
}) {
  return (
    <Card
      className="aspect-video h-full w-full max-w-sm cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{lamp.groupName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Status: {lamp.status ? "On" : "Off"}</p>
        <p>Usage: {lamp.usage} hours</p>
        <p>Last Active: {new Date(lamp.lastTurnOnAt).toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}
