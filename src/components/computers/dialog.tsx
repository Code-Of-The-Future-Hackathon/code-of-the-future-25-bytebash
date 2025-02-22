import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import ComputerCreateForm from "./form";
import { Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";

type ComputerCreateDialogProps = {
    form: UseFormReturn<{ name: string }, any, undefined>;
    onSubmit: (values: { name: string }) => void;
};
export default function ComputerCreateDialog({
    form,
    onSubmit,
}: ComputerCreateDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className="max-w-sm aspect-video h-min w-full">
                <Button
                    asChild
                    variant="outline"
                    className="p-1  w-full  h-full rounded-lg "
                >
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add a computer</DialogTitle>
                <ComputerCreateForm form={form} onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
}
