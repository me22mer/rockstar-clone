"use client";

import { useState } from "react";

import SearchMobile from "../ui/navbar-mobile/Search-Mobile";
import FeaturedMobile from "../ui/navbar-mobile/Featured-Mobile";
import NavbarMobile from "../ui/navbar-mobile/Navbar-Moblie";
import LauncherMobile from "../ui/navbar-mobile/Launcher-Mobile";
import UserMobile from "../ui/navbar-mobile/User-Mobile";

import Motion from "./Motion";
import Button from "../Button/Button";

import { cn } from "@/lib/cn";
import Logo from "../icons/Logo";


export default function HeaderMobile() {
  const [open, isOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <nav className="sticky top-0 w-full  px-8 md:px-10 border-b border-b-zinc-800 bg-black/95 backdrop-blur-lg">
        <div className="static py-6  flex justify-between items-center">
          <div className="">
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
          <UserMobile />
        </div>
      </nav>
      <Motion
        isOpen={open}
        className="bg-black absolute top-[85px] z-50 container h-full "
      >
        <div className="">
          {" "}
          <SearchMobile />
          <FeaturedMobile />
          <NavbarMobile />
          <LauncherMobile />
        </div>
      </Motion>
    </div>
  );
}
