import { ComputerResponse } from "~/lib/validations/computer";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ComputerCard({
    computer,
    onClick,
}: {
    computer: ComputerResponse;
    onClick: () => void;
}) {
    return (
        <Card className="cursor-pointer hover:bg-gray-100" onClick={onClick}>
            <CardHeader>
                <CardTitle>{computer.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Status: {computer.status ? "On" : "Off"}</p>
                <p>Usage: {computer.usage} hours</p>
                <p>
                    Last Active:{" "}
                    {new Date(computer.lastTurnOnAt).toLocaleString()}
                </p>
            </CardContent>
        </Card>
    );
}
