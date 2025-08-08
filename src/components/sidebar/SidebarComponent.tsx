import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { items } from "./sidebarMenu"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar className="p-5" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <p>Application</p>
        <SidebarMenu>
            {
                items.map((menu) => (
                    <Link href={""} className="flex gap-3 items-center mb-2">
                        <menu.icon size={20}/>
                        <span>{menu.title}</span>
                    </Link>
                ))
            }
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}