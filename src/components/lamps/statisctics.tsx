import { LampsResponse } from "~/lib/validations/lamps";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { Badge } from "../ui/badge";
import { Lightbulb, Timer, Calendar, User, Activity } from "lucide-react";

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
            (sum, lamp) => sum + parseInt(lamp.usage),
            0
        );
        const activeLamps = lamps.filter((lamp) => lamp.status).length;

        return (
            <Card className="p-6 shadow-lg">
                <CardHeader>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Activity className="w-6 h-6 text-blue-500" />
                        Total Statistics
                    </h2>
                </CardHeader>
                <CardContent className="grid gap-3 text-lg">
                    <p>
                        <Lightbulb className="inline-block w-5 h-5 mr-2 text-yellow-500" />
                        Total Lamps: <span className="font-semibold">{lamps.length}</span>
                    </p>
                    <p>
                        <Timer className="inline-block w-5 h-5 mr-2 text-green-500" />
                        Total Usage:{" "}
                        <span className="font-semibold">{totalUsage} hours</span>
                    </p>
                    <p>
                        <Lightbulb className="inline-block w-5 h-5 mr-2 text-green-500" />
                        Active Lamps:{" "}
                        <span className="font-semibold">{activeLamps}</span>
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="p-4 md:p-6 shadow-lg w-full">
            <CardHeader>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                    {selectedLamp.name} Statistics
                </h2>
            </CardHeader>
            <CardContent className="grid gap-2 md:gap-3 lg:text-lg">
                <p className="flex items-center gap-2">
                    <span className="text-xs md:text-sm text-gray-600">ID:</span>
                    <span className="font-semibold text-xs md:text-sm">{selectedLamp.id}</span>
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm text-gray-600">Group:</span>
                    <Badge>{selectedLamp.groupName}</Badge>
                </div>
                <p className="flex items-center gap-2">
                    <Timer className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                    <span className="text-xs md:text-sm text-gray-600">Usage:</span>
                    <span className="font-semibold text-xs md:text-sm">{selectedLamp.usage} hours</span>
                </p>
                <p className="flex items-center gap-2">
                    <Lightbulb
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                            selectedLamp.status ? "text-green-500" : "text-gray-400"
                        }`}
                    />
                    <span className="text-xs md:text-sm text-gray-600">Status:</span>
                    <span
                        className={`font-semibold text-xs md:text-sm ${
                            selectedLamp.status ? "text-green-600" : "text-gray-500"
                        }`}
                    >
            {selectedLamp.status ? "On" : "Off"}
          </span>
                </p>
                <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                    <span className="text-xs md:text-sm text-gray-600">Last Turn On:</span>
                    <span className="font-semibold text-xs md:text-sm">
            {new Date(selectedLamp.lastTurnOnAt).toLocaleString()}
          </span>
                </p>
                <p className="flex items-center gap-2">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                    <span className="text-xs md:text-sm text-gray-600">Owner ID:</span>
                    <span className="font-semibold text-xs md:text-sm">{selectedLamp.ownerId}</span>
                </p>
                <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                    <span className="text-xs md:text-sm text-gray-600">Created At:</span>
                    <span className="font-semibold text-xs md:text-sm">
            {new Date(selectedLamp.createdAt).toLocaleString()}
          </span>
                </p>
                <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                    <span className="text-xs md:text-sm text-gray-600">Updated At:</span>
                    <span className="font-semibold text-xs md:text-sm">
            {new Date(selectedLamp.updatedAt!).toLocaleString()}
          </span>
                </p>
            </CardContent>
        </Card>
    );
}
