import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import * as React from "react";
import { AppSidebar } from "~/components/ui/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import Footer from "~/components/ui/Footer";

export default function AppLayout({
                                      children,
                                  }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <SignedIn>
                <SidebarProvider>
                    <div className="w-full flex h-screen">
                        <AppSidebar />
                        <div className="flex flex-col flex-1">
                            <main className="flex-1 p-4">{children}</main>
                            <Footer />
                        </div>
                    </div>
                </SidebarProvider>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}