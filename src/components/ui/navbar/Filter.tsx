"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Button from "../../Button/Button";
import SearchIcon from "../../icons/Search";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import CloseIcon from "@/components/icons/Close";

import { cn } from "@/lib/utils";
import { variants } from "./Menu";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const toggleSubMenu = () => {
    setOpen(!open);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      console.log({ category: event.currentTarget.value });
    }
  };
  
  // const handleFilterChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log({ category: event.currentTarget.value });
  // };
  
  return (
    <>
      <Button onClick={toggleSubMenu}>
        <SearchIcon className="w-6 h-6" />
      </Button>
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={variants}
        className={cn("absolute w-full left-0 top-[5rem] bg-[#121212]")}
      >
        <div className={cn("px-20 py-6")}>
          <div
            className={cn(
              "flex justify-between gap-3 items-center align-middle"
            )}
          >
            <div className="flex">
              <Button>
                <SearchIcon className="w-8 h-8" />
              </Button>
            </div>
            <div className="w-full mr-10">
              <input
                type="text"
                placeholder="Search Rockstar Games..."
                className={cn(
                  "w-full bg-transparent  text-3xl font-semibold focus:outline-none placeholder:text-white tracking-tight"
                )}
              />
            </div>
            <div className="flex space-x-3">
              <Button
                value="Games"
                variant="Search"
                size="xl"
                className="px-8 py-2.5"
                // onClick={handleFilterChange}
                onKeyDown={handleKeyPress}
              >
                Games
              </Button>
              <Button
                value="Posts"
                variant="Search"
                size="xl"
                className="px-8 py-2.5"
                // onClick={handleFilterChange}
                onKeyDown={handleKeyPress}

              >
                Posts
              </Button>
              <Button
                value="Videos"
                variant="Search"
                size="xl"
                className="px-8 py-2.5"
                // onClick={handleFilterChange}
                onKeyDown={handleKeyPress}

              >
                Videos
              </Button>
              <Button
                value="Videos"
                variant="Search"
                size="xl"
                className="px-6 py-2.5 flex items-center gap-3"
                onClick={() => setDropdown(dropdown)}
              >
                Community
                <ArrowChevonDownIcon />
              </Button>
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
