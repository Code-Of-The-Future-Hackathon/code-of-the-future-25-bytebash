"use client";

import { Plus } from "lucide-react";
import * as React from "react";
import EquipmentCreateForm from "~/components/equipment/form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export default function EquipmentCreateDialog() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-full w-full rounded-lg border-2 border-dashed transition-colors hover:border-primary hover:bg-primary/5"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <Plus className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
              Add an equipment
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="mb-6 text-center text-2xl font-semibold">
          Add a New Equipment
        </DialogTitle>
        <EquipmentCreateForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
