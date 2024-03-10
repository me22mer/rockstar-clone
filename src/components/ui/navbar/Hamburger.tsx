"use client";

import { useState } from "react";
import Button from "../../Button/Button";
import Motion from "@/components/common/Motion";
import { cn } from "@/lib/cn";
import SearchMobile from "../navbar-mobile/Search-Mobile";
import FeaturedMobile from "../navbar-mobile/Featured-Mobile";

export default function Hamburger() {
  const [open, isOpen] = useState(false);
  return (
    <div>
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
          <span className={cn(`py-[1px] w-full rounded-2xl bg-white`)}></span>
          <span
            className={cn(`py-[1px] w-full rounded-2xl bg-white`, {
              "-translate-y-[8.5px] transition-all": open,
              "transition-all": !open,
            })}
          ></span>
        </Button>
      </div>
    </div>
  );
}
