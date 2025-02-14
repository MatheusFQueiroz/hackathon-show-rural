"use client";

import * as React from "react";
import {
  Bot,
  Warehouse,
  ChartPie,
  Package,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Elcio",
    email: "elcio@coopavel.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "../",
      icon: ChartPie,
      isActive: true,
    },
    {
      title: "Aviários",
      url: "aviarios",
      icon: Warehouse,
      isActive: true,
    },
    {
      title: "Lotes",
      url: "lotes",
      icon: Package,
      items: [
        {
          title: "Checklist",
          url: "checklist",
        },
        {
          title: "Ocorrências",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="../">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Coopavel</span>
                  <span className="truncate text-xs">Cooperativa Agroindustrial</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
