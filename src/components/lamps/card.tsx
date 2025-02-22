import type { LampsResponse } from "~/lib/validations/lamps";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Clock, Power } from "lucide-react";

export default function LampCard({
                                     lamp,
                                     onClick,
                                 }: {
    lamp: LampsResponse;
    onClick: () => void;
}) {
    return (
        <div className="w-full">
            <Card
                className="cursor-pointer hover:shadow-md transition-all duration-300 overflow-hidden group"
                onClick={onClick}
            >
                <div className="absolute top-0 right-0 p-2">
                    <Badge variant={lamp.status ? "success" : "secondary"}>{lamp.status ? "On" : "Off"}</Badge>
                </div>
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center space-x-2">
                        <Power className={`w-5 h-5 ${lamp.status ? "text-green-500" : "text-gray-400"}`} />
                        <span>{lamp.groupName}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Usage: {lamp.usage} hours
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Last Active: {new Date(lamp.lastTurnOnAt).toLocaleString()}
                        </p>
                    </div>
                </CardContent>
                <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
        </div>
    );
}
