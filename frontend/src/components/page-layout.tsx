"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/toggle-mode-button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
interface PageMoldProps {
  children: ReactNode;
  className?: string;
  sidebarDefaultOpen?: boolean;
}

export default function PageLayout({
  children,
  className = "",
  sidebarDefaultOpen = false,
}: PageMoldProps) {
  return (
    <SidebarProvider defaultOpen={sidebarDefaultOpen}>
      <div className={`flex flex-col w-full ${className}`}>
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <AppSidebar />
          <div className="flex items-center justify-between px-4 py-3">
            <SidebarTrigger size="lg" />
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 justify-start xl:justify-center items-center p-12 overflow-auto m-12">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
