'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { items } from "./sidebarMenu"
import Link from "next/link"
import { useState } from "react";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar className="p-5 min-w-fit" collapsible="icon">
      <SidebarContent className="bg-white">
        <SidebarTrigger className="w-5 h-5" onClick={() => setCollapsed(!collapsed)}/>
          <SidebarHeader />
        <SidebarMenu>
            {
                items.map((menu, index) => (
                    <Link key={index} href={""} className="flex gap-3 items-center mb-3">
                        <menu.icon size="20px"/>
                        {!collapsed && <span>{menu.title}</span>}
                    </Link>
                ))
            }
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}