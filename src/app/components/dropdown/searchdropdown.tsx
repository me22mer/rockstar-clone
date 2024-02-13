"use client";

import Arrow_B_Icon from "@/app/icons/arrow-bottom";
import CloseIcon from "@/app/icons/close";
import SearchIcon from "@/app/icons/search";
import { useOutsideClick } from "@/app/lib/useoutsideclick";
import { cn } from "@/app/lib/utils";
import { useState } from "react";

const submenuLinks = [
  {
    title: "Users",
    href: "",
  },
  {
    title: "Crews",
    href: "",
  },
  {
    title: "Jobs",
    href: "",
  },
  {
    title: "User Photos",
    href: "",
  },
  {
    title: "User Videos",
    href: "",
  },
];

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
};

export default function SearchDropdown({ isOpen, onClose }: Props) {
  const [subOpen, setSubOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Games");

  const tabClasses = (tabName: string) => {
    return `px-4 py-2 focus:outline-none ${
      activeTab === tabName
        ? "px-8 py-2.5 text-xl font-semibold bg-white text-black rounded-full transition duration-150"
        : "px-8 py-2.5 text-xl text-white font-semibold hover:bg-zinc-500  rounded-full bg-zinc-700 transition duration-150"
    }`;
  };

  const ref = useOutsideClick(() => {
    setSubOpen(false);
  });

  return (
    <div
      ref={ref}
      className={cn(
        `absolute px-20 py-6  w-full left-0 top-[5rem] bg-zinc-800`,
        {
          "opacity-100 visible trnaslate-y-0 transition-all ease-linear duration-150":
            isOpen,
          "opacity-0 invisible translate-y-[-5px] transition-all ease-linear duration-150":
            !isOpen,
        }
      )}
    >
      <div className="flex justify-between gap-3">
        <div className="w-full flex items-center gap-3">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search Rockstar Games..."
            className="w-full mr-10 bg-transparent  text-3xl font-semibold focus:outline-none placeholder:text-white tracking-tight"
          />
        </div>
        <div className="gap-10 flex items-center">
          <div className="gap-3.5 relative flex items-center">
            <button
              className={tabClasses("Games")}
              onClick={() => setActiveTab("Games")}
            >
              Games
            </button>
            <button
              className={tabClasses("Posts")}
              onClick={() => setActiveTab("Posts")}
            >
              Posts
            </button>
            <button
              className={tabClasses("Videos")}
              onClick={() => setActiveTab("Videos")}
            >
              Videos
            </button>
            <button
              onClick={() => setSubOpen(!subOpen)}
              className="px-6 py-2.5 flex items-center gap-2 text-xl text-white font-semibold hover:bg-zinc-500 active:bg-white active:text-black rounded-full bg-zinc-700"
            >
              Community
              <Arrow_B_Icon className={`${subOpen ? "rotate-180" : ""}`} />
            </button>
            {subOpen && (
              <nav className="-right-12 top-14 w-[240px] absolute">
                <ul className="list-item bg-[#121212] divide-y divide-zinc-800 rounded-lg">
                  {submenuLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="block p-6 font-semibold rounded-lg  hover:bg-zinc-800"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
