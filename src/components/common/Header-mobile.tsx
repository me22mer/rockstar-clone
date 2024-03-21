"use client";

import dynamic from "next/dynamic";
import SearchMobile from "../ui/navbar-mobile/Search-Mobile";
import FeaturedMobile from "../ui/navbar-mobile/Featured-Mobile";
import NavbarMobile from "../ui/navbar-mobile/Navbar-Moblie";
import LauncherMobile from "../ui/navbar-mobile/Launcher-Mobile";
import Motion from "./Motion";
import Button from "../Button/Button";
import { useCallback, useState } from "react";
import { cn } from "@/lib/cn";

const Logo = dynamic(() => import("../icons/Logo"));
const User = dynamic(() => import("../ui/navbar/User"));

export default function HeaderMobile() {
  const [open, isOpen] = useState(false);

  return (
    <div className="lg:hidden ">
      <nav className="w-full h-[80px] px-8 md:px-10 border-b border-b-zinc-800 ">
        <div className="h-full flex justify-between items-center">
          <div>
            <Button
              onClick={() => isOpen(!open)}
              className="w-7 space-y-1.5 flex flex-col"
            >
              <span
                className={cn(`py-[1px] w-full rounded-2xl bg-white`, {
                  "translate-y-[8.5px] transition-all": open,
                  "transition-all": !open,
                })}
              ></span>
              <span
                className={cn(`py-[1px] w-full rounded-2xl bg-white`)}
              ></span>
              <span
                className={cn(`py-[1px] w-full rounded-2xl bg-white`, {
                  "-translate-y-[8.5px] transition-all": open,
                  "transition-all": !open,
                })}
              ></span>
            </Button>
          </div>
          <Logo Href="/" className="flex ml-1.5 mt-0.5" />
          <User />
        </div>
      </nav>
      <Motion isOpen={open} className="">
        <SearchMobile />
        <FeaturedMobile />
        <NavbarMobile />
        <LauncherMobile />
      </Motion>
    </div>
  );
}
