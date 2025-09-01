"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Import sidebar constants from constants folder
import { sidebarUser } from "../constants/sidebar-user";
import { sidebarTeams } from "../constants/sidebar-teams";
import { sidebarNavMain } from "../constants/sidebar-nav-main";
import { ScrollArea } from "./ui/scroll-area";
import { SingleMenu } from "./single-menus";
import { SingleMenuItems } from "@/constants/single-menus";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="border-gray-200/70">
      <SidebarHeader>
        <TeamSwitcher teams={sidebarTeams} />
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea className="overflow-y-auto">
          <SingleMenu item={SingleMenuItems} />
          <NavMain items={sidebarNavMain} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
