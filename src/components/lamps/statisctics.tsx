import { LampsResponse } from "~/lib/validations/lamps";
import { Badge } from "../ui/badge";

interface StatisticsPanelProps {
  lamps: LampsResponse[];
  selectedLamp: LampsResponse | null;
}

export default function LampStatisticsPanel({
  lamps,
  selectedLamp,
}: StatisticsPanelProps) {
  if (!selectedLamp) {
    // Show total statistics
    const totalUsage = lamps.reduce(
      (sum, computer) => sum + parseInt(computer.usage),
      0,
    );
    const activeLamps = lamps.filter((lamp) => lamp.status).length;

    return (
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Total Statistics</h2>
        <p>Total Lamps: {lamps.length}</p>
        <p>Total Usage: {totalUsage} hours</p>
        <p>Active Lamps: {activeLamps}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        {selectedLamp.name} Statistics
      </h2>
      <p>ID: {selectedLamp.id}</p>
      <div className="flex gap-2 items-center">
        <p>Group Name:</p>
        <Badge>{selectedLamp.groupName}</Badge>
      </div>
      <p>Usage: {selectedLamp.usage} hours</p>
      <p>Status: {selectedLamp.status ? "On" : "Off"}</p>
      <p>
        Last Turn On: {new Date(selectedLamp.lastTurnOnAt).toLocaleString()}
      </p>
      <p>Owner ID: {selectedLamp.ownerId}</p>
      <p>Created At: {new Date(selectedLamp.createdAt).toLocaleString()}</p>
      <p>Updated At: {new Date(selectedLamp.updatedAt!).toLocaleString()}</p>
    </div>
  );
}
