"use client";

import { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { MenuNavItem } from "@/types";
import { MenuItems } from "@/constants";

import Button from "../../Button/Button";
import Featured from "./Featured";
import More from "./More";
import useAutoClose from "@/utils/useAutoClose";

export const variants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};

const MenuProp = ({ item }: { item: MenuNavItem }) => {
  const router = useRouter();
  const pathname = usePathname();
  const FeaturedRef = useRef<HTMLDivElement>(null);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    router.push(path, { scroll: false });
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  useAutoClose({
    isOpen: subMenuOpen,
    setIsOpen: setSubMenuOpen,
    targetRef: FeaturedRef,
  });

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
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          >
            {item.title}
            <span
              className={`tarnsition-all duration-300 ${
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
          <motion.div
            initial={false}
            animate={subMenuOpen && item.title ? "open" : "closed"}
            variants={variants}
          >
            {item.title === "Games" && <Featured FeaturedRef={FeaturedRef} />}
            {item.title === "More" && <More />}
          </motion.div>
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

export default function Menu() {
  return (
    <div className="flex">
      {MenuItems.map((item, idx) => {
        return <MenuProp key={idx} item={item} />;
      })}
    </div>
  );
}
