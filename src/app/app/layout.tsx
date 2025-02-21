import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import * as React from "react";
import { AppSidebar } from "~/components/ui/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
       <AppSidebar />
      <SignedIn>
        {/*all main components here*/}
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </SidebarProvider>
  );
}
