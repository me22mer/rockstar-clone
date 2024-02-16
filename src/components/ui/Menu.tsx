"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MenuNavItem } from "@/types";
import { MenuItems } from "@/constants";
import Button from "../Button/Button";
import Featured from "./Featured";

export default function Menu() {
  return (
    <div className="flex">
      {MenuItems.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
    </div>
  );
}

function MenuItem({ item }: { item: MenuNavItem }) {
  const router = useRouter();
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <Button
            variant="Menu"
            size="sm"
            className={`${subMenuOpen ? "text-white" : ""}`}
            onClick={toggleSubMenu}
          >
            {item.title}
            <span className={`${subMenuOpen ? "rotate-180" : ""}`}>
              {item.icon}
            </span>
            {subMenuOpen && (
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 border-transparent border-zinc-200 duration-300"
                )}
              ></span>
            )}
          </Button>
          {subMenuOpen && item.title === "Games" ? <Featured /> : ""}
        </>
      ) : (
        <Button
          variant="Menu"
          size="sm"
          className={`group ${pathname === item.path ? "text-white " : ""}`}
          onClick={() => router.push(item.path, { scroll: false })}
        >
          {item.title}
          {item.icon}
          <span
            className={cn(
              "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 group-hover:border-zinc-200 border-transparent duration-300",
              {
                "border-zinc-200": pathname === item.path,
              }
            )}
          ></span>
        </Button>
      )}
    </div>
  );
}
