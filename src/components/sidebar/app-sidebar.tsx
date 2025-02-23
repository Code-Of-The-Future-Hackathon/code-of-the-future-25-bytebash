"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AppSidebarNavigation } from "~/components/sidebar/app-sidebar-navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from "~/components/ui/sidebar";
import { getNavigationList } from "~/lib/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const navigationItems = React.useMemo(
    () => getNavigationList(pathname),
    [pathname],
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            alt="ByteBash Logo"
            src="/logo.png"
            width={1024}
            height={1024}
            className="flex w-full justify-center dark:invert"
          />
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <AppSidebarNavigation items={navigationItems} />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              appearance={{
                variables: {
                  fontSize: "lg",
                },
                elements: {
                  rootBox: "w-full flex justify-center",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
