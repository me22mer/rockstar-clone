"use client";

import { useState } from "react";

import Logo from "../icons/logo";
import SearchIcon from "../icons/search";
import UserIcon from "../icons/user";
import Arrow_B_Icon from "../icons/arrow-bottom";
import NewtabIcon from "../icons/newtab";
import Button from "./button";
import UserDropdown from "./dropdown/userdropdown";
import GamesDropdown from "./dropdown/gamesdropdown";
import { useOutsideClick } from "../lib/useoutsideclick";
import SearchDropdown from "./dropdown/searchdropdown";

export default function Header() {
  const [isOpenUserDropdown, setIsOpenUserDropdown] = useState(false);
  const [isOpenGamesDropdown, setIsOpenGamesDropdown] = useState(false);
  const [isOpenSearchDropdown, setIsOpenSearchDropdown] = useState(false);

  const ref = useOutsideClick(() => {
    setIsOpenSearchDropdown(false);
    setIsOpenUserDropdown(false);
    setIsOpenGamesDropdown(false);
  });

  return (
    <header
      ref={ref}
      className="w-full relaive flex justify-between px-20 text-sm border-b border-zinc-800"
    >
      <div className="flex items-center xl:basis-1/6">
        <button>
          <Logo />
        </button>
      </div>
      <div className="">
        <nav className="static flex justify-between items-center">
          <Button
            className="gap-2 flex items-center"
            onClick={() => setIsOpenGamesDropdown(!isOpenGamesDropdown)}
          >
            Games
            <Arrow_B_Icon
              className={`${isOpenGamesDropdown ? "rotate-180" : ""}`}
            />
          </Button>
          <Button>Newswire</Button>
          <Button>Videos</Button>
          <Button>Downloads</Button>
          <Button className="max-xl:hidden gap-2 flex items-center">
            Store
            <NewtabIcon />
          </Button>
          <Button className="max-xl:hidden gap-2 flex items-center">
            Support
            <NewtabIcon />
          </Button>
          <Button className="xl:hidden gap-2 flex items-center">
            More
            <Arrow_B_Icon />
          </Button>
        </nav>
      </div>
      <div className="flex justify-end items-center space-x-8">
        <button className="px-4 py-2 rounded-md text-black  font-bold bg-[#fcaf17]">
          GET LAUNCHER
        </button>
        <button onClick={() => setIsOpenSearchDropdown(!isOpenSearchDropdown)}>
          <SearchIcon />
        </button>
        <button onClick={() => setIsOpenUserDropdown(!isOpenUserDropdown)}>
          <UserIcon />
        </button>
      </div>
      <UserDropdown isOpen={isOpenUserDropdown} />
      <GamesDropdown isOpen={isOpenGamesDropdown} />
      <SearchDropdown
        isOpen={isOpenSearchDropdown}
        onClose={() => setIsOpenSearchDropdown(false)}
      />
    </header>
  );
}
