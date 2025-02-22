import { ComputerResponse } from "~/lib/validations/computer";

interface StatisticsPanelProps {
    computers: ComputerResponse[];
    selectedComputer: ComputerResponse | null;
}

export default function ComputerStatisticsPanel({
    computers,
    selectedComputer,
}: StatisticsPanelProps) {
    if (!selectedComputer) {
        // Show total statistics
        const totalUsage = computers.reduce(
            (sum, computer) => sum + parseInt(computer.usage),
            0,
        );
        const activeComputers = computers.filter(
            (computer) => computer.status,
        ).length;

        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Total Statistics</h2>
                <p>Total Computers: {computers.length}</p>
                <p>Total Usage: {totalUsage} hours</p>
                <p>Active Computers: {activeComputers}</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                {selectedComputer.name} Statistics
            </h2>
            <p>ID: {selectedComputer.id}</p>
            <p>Usage: {selectedComputer.usage} hours</p>
            <p>Status: {selectedComputer.status ? "On" : "Off"}</p>
            <p>
                Last Turn On:{" "}
                {new Date(selectedComputer.lastTurnOnAt).toLocaleString()}
            </p>
            <p>Owner ID: {selectedComputer.ownerId}</p>
            <p>
                Created At:{" "}
                {new Date(selectedComputer.createdAt).toLocaleString()}
            </p>
            <p>
                Updated At:{" "}
                {new Date(selectedComputer.updatedAt!).toLocaleString()}
            </p>
        </div>
    );
}
