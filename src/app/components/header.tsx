import Logo from "../icons/logo";

import SearchIcon from "../icons/search";
import UserIcon from "../icons/user";
import ArrowIcon from "../icons/arrow";
import NewtabIcon from "../icons/newtab";
import Button from "./button";
export default function Header() {
  return (
    <header className="w-full flex justify-between px-20 text-sm border-b border-zinc-800">
      <div className="flex items-center basis-1/6">
        <button>
          <Logo />
        </button>
      </div>
      <div className="">
        <nav className="static flex justify-between items-center">
          <Button className="gap-2 flex items-center">
            Games
            <ArrowIcon />
          </Button>
          <Button className="">Newswire</Button>
          <Button className="">Videos</Button>
          <Button className="">Downloads</Button>
          <Button className="gap-2 flex items-center">
            Store
            <NewtabIcon />
          </Button>
          <Button className="gap-2 flex items-center">
            Support
            <NewtabIcon />
          </Button>
        </nav>
      </div>
      <div className="flex justify-end items-center space-x-8">
        <button className="px-4 py-2 rounded-md text-black  font-bold bg-[#fcaf17]">
          GET LAUNCHER
        </button>
        <button>
          <SearchIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </header>
  );
}
