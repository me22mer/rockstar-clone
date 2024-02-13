"use client";

import Link from "next/link";
import { useState } from "react";

import Arrow_B_Icon from "@/app/icons/arrow-bottom";
import GlobalIcon from "@/app/icons/global";
import { cn } from "@/app/lib/utils";
import { useOutsideClick } from "@/app/lib/useoutsideclick";

type Props = {
  isOpen?: boolean;
  className?: string;
};

const submenuLinks = [
  {
    title: "Support",
    href: "",
  },
  {
    title: "Legal",
    href: "",
  },
  {
    title: "Privacy Policy",
    href: "",
  },
  {
    title: "Cookies Policy",
    href: "",
  },
  {
    title: "Cookies Settings",
    href: "",
  },
  {
    title: "Do Not Sell My Information",
    href: "",
  },
];

export default function UserDropdown({ isOpen, className }: Props) {
  const [subOpen, setSubOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setSubOpen(false);
  });
  return (
    <div
      ref={ref}
      className={cn("w-[345px] absolute top-[5.25rem] right-10 ", className, {
        "opacity-100 visible transition-all ease-linear duration-150": isOpen,
        "opacity-0 invisible transition-all ease-linear duration-150": !isOpen,
      })}
    >
      <div className="flex flex-col divide-y text-sm divide-zinc-800 bg-[#121212] rounded-md border border-zinc-800">
        <Link href="" className="p-5 hover:bg-zinc-800 rounded-t-md">
          Sign In
        </Link>
        <Link href="" className="p-5 hover:bg-zinc-800 ">
          Sign Up
        </Link>
        <div className="flex flex-col">
          <button
            className="p-5 flex justify-between hover:bg-zinc-800 rounded-b-sm "
            onClick={() => setSubOpen(!subOpen)}
          >
            <span>Help</span>
            <span>
              <Arrow_B_Icon className={`${subOpen ? "rotate-180" : ""}`} />
            </span>
          </button>
          {subOpen && (
            <nav className="pl-5 pr-2.5 pb-5 ">
              <ul className="list-item bg-[#121212]">
                {submenuLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block px-3 py-[0.5rem] rounded-md hover:bg-zinc-800"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col bg-[#121212] rounded-md border border-zinc-800">
        <button className="p-5 flex justify-between hover:bg-zinc-800 rounded-sm ">
          <div>
            <span className="flex items-center gap-2.5">
              <GlobalIcon />
              Select a Language
            </span>
          </div>
          <span className="">
            <Arrow_B_Icon />
          </span>
        </button>
      </div>
    </div>
  );
}
