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
import TvCreateForm from "./form";

export default function TvCreateDialog() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group h-32 w-full rounded-lg border-2 border-dashed transition-colors hover:border-primary hover:bg-primary/5"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <Plus className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
              Add a Tv
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="mb-6 text-center text-2xl font-semibold">
          Add a New Tv
        </DialogTitle>
        <TvCreateForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
