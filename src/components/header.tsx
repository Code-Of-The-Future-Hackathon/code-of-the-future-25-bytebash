import { UserButton } from "@clerk/nextjs";
import * as React from "react";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { ThemeToggle } from "~/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between border-b bg-sidebar px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex items-center gap-2">
        <ThemeToggle className="size-8 rounded-full" />
        <UserButton />
      </div>
    </header>
  );
}
