"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavItems {
  label: string;
  href: string;
}
type Props = {
  navItems?: NavItems[];
  className?: string;
};

const NavigationTabs = ({ navItems, className }: Props) => {
  const pathname = usePathname();

  if (!navItems || navItems.length === 0) return null;

  return (
    <div className={cn("flex gap-2 md:gap-6 text-lg flex-wrap", className)}>
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group relative inline-block py-2 font-medium text-gray-700",
              isActive ? "text-primary" : "hover:text-primary",
            )}
          >
            <span className="text-[15px] md:text-[16px]">{item.label}</span>
            <span
              className={cn(
                "absolute left-0 -bottom-0.5 h-[3px] w-full transform bg-primary transition-transform duration-300 ease-in-out",
                isActive ? "scale-x-100" : "scale-x-0",
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
