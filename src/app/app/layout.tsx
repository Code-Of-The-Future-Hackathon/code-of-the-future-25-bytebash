import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import * as React from "react";
import { AppSidebar } from "~/components/ui/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          {/*all main components here*/}
          {children}
        </SidebarProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
