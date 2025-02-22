'use client';

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
        return (
            <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Total Statistics</h2>
                <p className="text-gray-600">
                    <span className="font-semibold">Total Absentees:</span> {absentees.length}
                </p>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg sm:max-w-md">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {selectedAbsentee.name} Statistics
            </h2>
            <p className="text-gray-600">
                <span className="font-semibold">ID:</span> {selectedAbsentee.id}
            </p>
            <p className="mt-2 text-gray-600">
                <span className="font-semibold">Owner ID:</span> {selectedAbsentee.ownerId}
            </p>
            <p className="mt-2 text-gray-600">
                <span className="font-semibold">Class Name:</span> {selectedAbsentee.className}
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-800">
                {new Date(selectedAbsentee.classStart * 1000).toLocaleTimeString()} - {" "}
                {new Date(selectedAbsentee.classEnd * 1000).toLocaleTimeString()}
            </p>
        </div>
    );
}
