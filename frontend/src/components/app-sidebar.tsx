"use client";
import { Calendar, Home, Ticket } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AppSidebar() {
  const { open } = useSidebar();

  const user = {
    name: "arief",
    email: "ariefsatria@gmail.com",
    avatar: "",
  };

  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Train Parameter",
      url: "/train-parameter",
      icon: Ticket,
    },
    {
      title: "Track Parameter",
      url: "/track-parameter",
      icon: Calendar,
    },
    {
      title: "Running Parameter",
      url: "/running-parameter",
      icon: Calendar,
    },
    {
      title: "Electrical Parameter",
      url: "/electrical-parameter",
      icon: Calendar,
    },
  ];
  return (
    <Sidebar variant="floating" collapsible="icon" className="z-50">
      <SidebarTrigger
        size={"lg"}
        className={cn("absolute", open ? "top-6 left-6" : "top-4 left-4")}
      />

      <SidebarContent
        className={cn(
          "flex flex-col gap-4 transition-all duration-300",
          open ? "px-4 pt-16" : "pt-11"
        )}
      >
        <SidebarMenu>
          <SidebarGroup>
            <SidebarGroupContent className="space-y-1">
              <SidebarGroupLabel className={cn(open ? "block" : "hidden")}>
                Input Menus
              </SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarHeader key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarHeader>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter
        className={cn(
          "absolute bottom-0 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          open ? "p-0" : "p-0"
        )}
      ></SidebarFooter>
    </Sidebar>
  );
}
