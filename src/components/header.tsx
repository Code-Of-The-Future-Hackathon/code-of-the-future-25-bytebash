import { UserButton } from "@clerk/nextjs";
import * as React from "react";
import { SidebarTrigger } from "~/components/ui/sidebar";

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between border-b bg-sidebar px-4">
      <SidebarTrigger className="-ml-1" />
      <UserButton />
    </header>
  );
}
