"use client";

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
    const totalUsage = lamps.reduce(
      (sum, computer) => sum + parseInt(computer.usage),
      0,
    );
    const activeLamps = lamps.filter((lamp) => lamp.status).length;

    return (
      <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Total Statistics
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Total Lamps:</span> {lamps.length}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Total Usage:</span> {totalUsage} hours
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Active Lamps:</span> {activeLamps}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        {selectedLamp.name} Statistics
      </h2>
      <p className="text-gray-600">
        <span className="font-semibold">ID:</span> {selectedLamp.id}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <p className="font-semibold text-gray-600">Group Name:</p>
        <Badge className="rounded-full bg-blue-100 px-3 py-1 text-blue-600">
          {selectedLamp.groupName}
        </Badge>
      </div>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Usage:</span> {selectedLamp.usage} hours
      </p>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Status:</span>{" "}
        <span
          className={selectedLamp.status ? "text-green-600" : "text-red-600"}
        >
          {selectedLamp.status ? "On" : "Off"}
        </span>
      </p>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Last Turn On:</span>{" "}
        {new Date(selectedLamp.lastTurnOnAt).toLocaleString()}
      </p>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Owner ID:</span> {selectedLamp.ownerId}
      </p>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Created At:</span>{" "}
        {new Date(selectedLamp.createdAt).toLocaleString()}
      </p>
      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Updated At:</span>{" "}
        {new Date(selectedLamp.updatedAt!).toLocaleString()}
      </p>
    </div>
  );
}
