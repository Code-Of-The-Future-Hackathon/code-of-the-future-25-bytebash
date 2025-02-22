"use client";

import type { ComputerResponse } from "~/lib/validations/computer";
import { Badge } from "../ui/badge";

interface StatisticsPanelProps {
  computers: ComputerResponse[];
  selectedComputer: ComputerResponse | null;
}

export default function ComputerStatisticsPanel({
                                                  computers,
                                                  selectedComputer,
                                                }: StatisticsPanelProps) {
  if (!selectedComputer) {
    const totalUsage = computers.reduce(
        (sum, computer) => sum + Number.parseInt(computer.usage),
        0,
    );
    const activeComputers = computers.filter((computer) => computer.status).length;

    return (
        <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Total Statistics</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Total Computers:</span> {computers.length}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Total Usage:</span> {totalUsage} hours
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Active Computers:</span> {activeComputers}
          </p>
        </div>
    );
  }

  return (
      <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {selectedComputer.name} Statistics
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">ID:</span> {selectedComputer.id}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Usage:</span> {selectedComputer.usage} hours
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Status:</span>{" "}
          <span className={selectedComputer.status ? "text-green-600" : "text-red-600"}>
          {selectedComputer.status ? "On" : "Off"}
        </span>
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Last Turn On:</span>{" "}
          {new Date(selectedComputer.lastTurnOnAt).toLocaleString()}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Owner ID:</span> {selectedComputer.ownerId}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Created At:</span>{" "}
          {new Date(selectedComputer.createdAt).toLocaleString()}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Updated At:</span>{" "}
          {new Date(selectedComputer.updatedAt!).toLocaleString()}
        </p>
      </div>
  );
}
