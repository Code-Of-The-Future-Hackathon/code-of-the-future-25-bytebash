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
          variant="secondary"
          className="h-full w-full flex-col items-center justify-center border-2 border-dashed bg-muted-foreground/15"
        >
          <Plus className="size-8" />
          Add an equipment
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
