"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import Button from "../../Button/Button";
import SearchIcon from "../../icons/Search";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import CloseIcon from "@/components/icons/Close";

import { cn } from "@/lib/utils";
import { variants } from "./Menu";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const toggleSubMenu = () => {
    setOpen(!open);
  };

  const handleFilter = (
    e:
      | React.KeyboardEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      console.log({ search, category });
    }
  };

  return (
    <>
      <Button onClick={toggleSubMenu}>
        <SearchIcon className="w-6 h-6" />
      </Button>
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={variants}
        className={cn("absolute w-full left-0 top-[5rem] shadow-lg bg-zinc-800")}
      >
        <div className={cn("px-20 py-6")}>
          <div
            className={cn(
              "flex justify-between gap-3 items-center align-middle"
            )}
          >
            <div className="flex">
              <SearchIcon className="w-8 h-8" />
            </div>
            <div className="w-full mr-10">
              <input
                type="text"
                placeholder="Search Rockstar Games..."
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                onKeyDown={handleFilter}
                className={cn(
                  "w-full bg-transparent  text-3xl font-semibold focus:outline-none placeholder:text-white tracking-tight"
                )}
              />
            </div>
            <div className="flex space-x-3">
              <Button
                value="Games"
                variant="Filter"
                size="xl"
                className="px-8 py-2.5"
                onClick={(e) => setCategory(e.currentTarget.value)}
                onKeyDown={handleFilter}
              >
                Games
              </Button>
              <Button
                value="Posts"
                variant="Filter"
                size="xl"
                className="px-8 py-2.5"
                onClick={(e) => setCategory(e.currentTarget.value)}
                onKeyDown={handleFilter}
              >
                Posts
              </Button>
              <Button
                value="Videos"
                variant="Filter"
                size="xl"
                className="px-8 py-2.5"
                onClick={(e) => setCategory(e.currentTarget.value)}
                onKeyDown={handleFilter}
              >
                Videos
              </Button>
              <Button
                // value="Community"
                variant="Filter"
                size="xl"
                className="px-5 py-2.5 flex items-center gap-3"
                onClick={() => setDropdown(!dropdown)}
              >
                Community
                <ArrowChevonDownIcon
                  className={`${dropdown ? "rotate-180" : ""}`}
                />
              </Button>
              <motion.div
                initial={false}
                animate={dropdown ? "open" : "closed"}
                variants={variants}
                className={cn(
                  "absolute right-24 top-20 w-[240px] shadow-lg border border-zinc-800 rounded-lg bg-[#121212]"
                )}
              >
                <div className="divide-y divide-zinc-800">
                  <Button
                    value="Users"
                    onClick={(e) => setCategory(e.currentTarget.value)}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 rounded-t-lg hover:bg-zinc-800"
                  >
                    Users
                  </Button>
                  <Button
                    value="Crews"
                    onClick={(e) => setCategory(e.currentTarget.value)}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 hover:bg-zinc-800"
                  >
                    Crews
                  </Button>
                  <Button
                    value="Jobs"
                    onClick={(e) => setCategory(e.currentTarget.value)}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 hover:bg-zinc-800"
                  >
                    Jobs
                  </Button>
                  <Button
                    value="User Photos"
                    onClick={(e) => setCategory(e.currentTarget.value)}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 hover:bg-zinc-800"
                  >
                    User Photos
                  </Button>
                  <Button
                    value="User Videos"
                    onClick={(e) => setCategory(e.currentTarget.value)}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 rounded-b-lg hover:bg-zinc-800"
                  >
                    User Videos
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="ml-10">
              <Button onClick={() => setOpen(!open)}>
                {" "}
                <CloseIcon className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
