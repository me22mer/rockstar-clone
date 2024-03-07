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

const lang = [
  "Deutsch",
  "English",
  "Español",
  "Español Latinoamérica",
  "Français",
  "Italiano",
  "日本語",
  "한국어",
  "Polski",
  "Português do Brasil",
  "Русский",
  "繁體中文",
  "简体中文",
];

export default function Account() {
  const [open, setOpen] = useState(false);
  const [helpopen, setHelpOpen] = useState(false);
  const [langopen, setLangOpen] = useState(false);

  const AccountRef = useRef<HTMLDivElement>(null);

  return (
    <div className="static">
      <Button onClick={() => setOpen(!open)}>
        <UserIcon />
      </Button>
      <Motion
        isOpen={open}
        setIsOpen={[setOpen, setHelpOpen, setLangOpen]}
        targetRef={AccountRef}
        className={cn(`absolute w-[340px] top-[5rem] right-10 shadow-lg`, {
          "h-full scrollbar scrollbar-thumb-zinc-800 scrollbar-track-zinc-950 overflow-y-scroll ": langopen,
        })}
      >
        <div
          className={cn(
            `flex flex-col divide-y text-sm divide-zinc-800 bg-[#121212] rounded-md border border-zinc-800`
          )}
        >
          <Link href="" className="p-5 hover:bg-zinc-800 rounded-t-md">
            Sign In
          </Link>
          <Link href="" className="p-5 hover:bg-zinc-800 ">
            Sign Up
          </Link>
          <div className="flex flex-col">
            <button
              className="p-5 flex justify-between hover:bg-zinc-800 rounded-b-sm "
              onClick={() => setHelpOpen(!helpopen)}
            >
              <span>Help</span>
              <span>
                <ArrowChevonDownIcon
                  className={`fill-white transition-all duration-300 ${
                    helpopen ? "rotate-180 " : ""
                  }`}
                />
              </span>
            </button>
            <Motion isOpen={helpopen} setIsOpen={[setHelpOpen]} className="">
              <ul className="list-item px-5 bg-[#121212]">
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
        <div className="my-5 flex flex-col bg-[#121212] rounded-md border border-zinc-800">
          <button
            className="p-5 flex justify-between hover:bg-zinc-800 rounded-sm "
            onClick={() => setLangOpen(!langopen)}
          >
            <div className="flex space-x-3">
              <GlobalIcon />
              <p>Select a Language</p>
            </div>
            <div>
              <ArrowChevonDownIcon
                className={`fill-white transition-all duration-300 ${
                  langopen ? "rotate-180 " : ""
                }`}
              />
            </div>
          </button>
          <Motion isOpen={langopen} setIsOpen={[]} className="">
            <ul className="list-item bg-[#121212]">
              {lang.map((lang, index) => (
                <li className="" key={index}>
                  <a href="" className="block text-base pl-14 py-3 hover:bg-zinc-800">
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </Motion>
        </div>
      </Motion>
    </div>
  );
}
