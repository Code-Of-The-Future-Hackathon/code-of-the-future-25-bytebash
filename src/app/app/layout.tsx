import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import * as React from "react";
import Footer from "~/components/footer";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SidebarProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
