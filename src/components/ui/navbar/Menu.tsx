"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MenuNavItem } from "@/types";
import { MenuItems } from "@/constants";

import Button from "../../Button/Button";
import Featured from "./Featured";
import More from "./More";

export default function Menu() {
  return (
    <div className="flex">
      {MenuItems.map((item, idx) => {
        return <MenuProp key={idx} item={item} />;
      })}
    </div>
  );
}

const MenuProp = ({ item }: { item: MenuNavItem }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleClick = (path: string) => {
    router.push(path, { scroll: false });
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="max-lg:hidden">
      {item.submenu ? (
        <>
          <Button
            variant="Menu"
            size="sm"
            className={cn(
              `group ${subMenuOpen ? "text-white" : ""}`,

              { "xl:hidden flex": item.title === "More" }
            )}
            onClick={toggleSubMenu}
          >
            {item.title}
            <span
              className={`transition-all duration-300 ${
                subMenuOpen ? "rotate-180" : ""
              }`}
            >
              {item.icon}
            </span>
            <span
              className={cn(
                "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 group-hover:border-zinc-200 border-transparent duration-300",
                {
                  "border-zinc-200": isActive(item.path),
                }
              )}
            ></span>
          </Button>
          {subMenuOpen && item.title === "Games" ? <Featured /> : null}
          {subMenuOpen && item.title === "More" ? <More /> : null}
        </>
      ) : (
        <Button
          variant="Menu"
          size="sm"
          className={cn(
            `group ${isActive(item.path) ? "text-white " : ""}`,
            { "xl:flex hidden": item.title === "Store" },
            { "xl:flex hidden": item.title === "Support" }
          )}
          onClick={() => handleClick(item.path)}
        >
          {item.title}
          {item.icon}
          <span
            className={cn(
              "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 group-hover:border-zinc-200 border-transparent duration-300",
              {
                "border-zinc-200": isActive(item.path),
              }
            )}
          ></span>
        </Button>
      )}
    </div>
  );
};
