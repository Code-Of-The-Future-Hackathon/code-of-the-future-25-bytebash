"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AppSidebarNavigation } from "~/components/sidebar/app-sidebar-navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
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
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarNavigation items={navigationItems} />
      </SidebarContent>
    </Sidebar>
  );
}
