"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

import Button from "../../Button/Button";
import UserIcon from "../../icons/User";
import GlobalIcon from "@/components/icons/Global";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import Motion from "@/components/common/Motion";

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

export default function Account() {
  const [open, setOpen] = useState(false);
  const [subopen, setSubOpen] = useState(false);

  const AccountRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        <UserIcon />
      </Button>
      <Motion
        isOpen={open}
        setIsOpen={[setOpen, setSubOpen]}
        targetRef={AccountRef}
        className={cn(`absolute w-[345px] top-[5.25rem] right-10  shadow-lg`)}
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
              onClick={() => setSubOpen(!subopen)}
            >
              <span>Help</span>
              <span>
                <ArrowChevonDownIcon
                  className={`fill-white transition-all duration-300 ${
                    subopen ? "rotate-180 " : ""
                  }`}
                />
              </span>
            </button>
            <Motion isOpen={subopen} setIsOpen={[]} className="">
              <ul className="list-item pl-5 pr-2.5 pb-5 bg-[#121212]">
                {submenuLinks.map((link, index) => (
                  <li className="" key={index}>
                    <a
                      href={link.href}
                      className="block px-3 py-[0.5rem] rounded-md hover:bg-zinc-800"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Motion>
          </div>
        </div>
        <div className="mt-5 flex flex-col bg-[#121212] rounded-md border border-zinc-800">
          <button className="p-5 flex justify-between hover:bg-zinc-800 rounded-sm ">
            <span className="">
              <GlobalIcon />
            </span>
          </button>
        </div>
      </Motion>
    </div>
  );
}
