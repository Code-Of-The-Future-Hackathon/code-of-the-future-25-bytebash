import { AbsenteeResponse } from "~/lib/validations/absentee";

interface StatisticsPanelProps {
  absentees: AbsenteeResponse[];
  selectedAbsentee: AbsenteeResponse | null;
}

export default function AbsenteeStatisticsPanel({
  absentees,
  selectedAbsentee,
}: StatisticsPanelProps) {
  if (!selectedAbsentee) {
    // Show total statistics
    return (
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Total Statistics</h2>
        <p>{absentees.length}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        {selectedAbsentee.name} Statistics
      </h2>
      <p>ID: {selectedAbsentee.id}</p>
      <p>Owner ID:{selectedAbsentee.ownerId}</p>
      <p>Classname: {selectedAbsentee.className}</p>
      <p className="text-lg font-semibold">
        {selectedAbsentee.classStart} - {selectedAbsentee.classEnd}
      </p>
    </div>
  );
}
