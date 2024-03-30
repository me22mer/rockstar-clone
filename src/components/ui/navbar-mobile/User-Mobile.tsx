"use client";

import { useRef, useState } from "react";

import Button from "@/components/Button/Button";
import Motion from "@/components/common/Motion";
import DragMenuIcon from "@/components/icons/DragMenu";
import UserIcon from "@/components/icons/User";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import GlobalIcon from "@/components/icons/Global";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { lang, submenuLinks } from "../navbar/User";

export default function UserMobile() {
  const [open, setOpen] = useState(false);
  const [helpopen, setHelpOpen] = useState(false);
  const [langopen, setLangOpen] = useState(false);

  const UserRef = useRef<HTMLDivElement>(null);
  const LangRef = useRef<HTMLDivElement>(null);
  const HelpRef = useRef<HTMLDivElement>(null);

  return (
    <div className="static flex">
      <Button onClick={() => setOpen(!open)}>
        <UserIcon />
      </Button>
      <Motion
        isOpen={open}
        setIsOpen={[setOpen, setHelpOpen, setLangOpen]}
        className={cn(`absolute w-screen h-screen left-0 top-0 `)}
      >
        <div className="relative w-full h-full">
          <div
            className={cn(
              `absolute bottom-0 w-full h-[250px] bg-zinc-700 shadow-lg rounded-t-lg`,
              { "h-max": helpopen },
              { "h-auto": !helpopen }
            )}
          >
            <div ref={UserRef} className={cn(`sticky bottom-0`)}>
              <div className="px-3.5 pb-3.5 w-full h-full ">
                <div className="flex justify-center h-[2rem]">
                  <Button onClick={() => setOpen(!open)}>
                    <DragMenuIcon />
                  </Button>
                </div>
                <div
                  className={cn(
                    `flex flex-col divide-y text-sm text-white divide-zinc-800 bg-[#121212] rounded-md border border-zinc-800`
                  )}
                >
                  <Link
                    href=""
                    className="py-2.5 px-5 hover:bg-zinc-800 rounded-t-md"
                  >
                    Sign In
                  </Link>
                  <Link href="" className="py-2.5 px-5 hover:bg-zinc-800 ">
                    Sign Up
                  </Link>
                  <div className="flex flex-col">
                    <button
                      className="py-2.5 px-5 flex justify-between hover:bg-zinc-800 rounded-b-sm "
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
                    <Motion isOpen={helpopen} targetRef={HelpRef} className="">
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
                <div className="relative my-5 h-max flex flex-col bg-[#121212] rounded-md border border-zinc-800">
                  {langopen ? (
                    <div className="absolute bottom-0 w-full h-auto mb-10 bg-[#121212] rounded-lg z-50">
                      <option
                        disabled
                        defaultValue=""
                        className="text-sm pl-4 py-1 text-white  bg-sky-800 rounded-t-lg"
                      >
                        Select a Language
                      </option>
                      {lang.map((lang, index) => (
                        <option
                          key={index}
                          className="pl-4 py-1.5 w-full h-full text-white text-sm bg-[#121212] hover:bg-zinc-800"
                        >
                          {lang}
                        </option>
                      ))}
                    </div>
                  ) : null}

                  <button
                    className="py-2.5 px-5 flex justify-between hover:bg-zinc-800 rounded-sm "
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  );
}
