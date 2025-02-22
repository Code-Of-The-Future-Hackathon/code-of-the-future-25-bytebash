"use client";

import { Plus } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ComputerCreateForm from "./form";

export default function ComputerCreateDialog() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="aspect-video h-min w-full max-w-sm">
        <Button
          asChild
          variant="outline"
          className="h-full w-full rounded-lg p-1"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add a computer</DialogTitle>
        <ComputerCreateForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
