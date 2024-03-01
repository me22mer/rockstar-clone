"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import Button from "../../Button/Button";
import SearchIcon from "../../icons/Search";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import CloseIcon from "@/components/icons/Close";

import { cn } from "@/lib/utils";
import { variants } from "./Menu";

export default function Search() {
  const Ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [active, setActive] = useState<String | null>(null);
  const [subactive, setSubActive] = useState(false);

  const [Text, setText] = useState("Community");

  const handleFilter = (
    e:
      | React.KeyboardEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      console.log({
        search,
        category,
      });
    }
  };

  const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.value);
    setSubActive(false);
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText(e.currentTarget.value);
    setCategory(e.currentTarget.value);
    setSubActive(true);
    setText("Community");
  };

  useEffect(() => {
    const handleAutoClose = (e: MouseEvent) => {
      if (open && !Ref.current?.contains(e.target as Node)) {
        setOpen(false);
        setDropdown(false);
      }
      setDropdown(false);
    };
    document.addEventListener("click", handleAutoClose);

    return () => {
      document.removeEventListener("click", handleAutoClose);
    };
  }, [Ref, open, dropdown]);

  const categories = ["Games", "Posts", "Videos"];
  const Subcategories = [
    "Users",
    "Crews",
    "Jobs",
    "User Photos",
    "User Videos",
  ];

  return (
    <div className="">
      <Button onClick={() => setOpen(!open)}>
        <SearchIcon className="w-6 h-6" />
      </Button>
      <motion.div
        ref={Ref}
        initial={false}
        animate={open ? "open" : "closed"}
        variants={variants}
        className={cn(
          `absolute w-full left-0 top-[5rem] shadow-lg bg-zinc-800`,
          
        )}
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
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleFilter}
                className={cn(
                  "w-full bg-transparent  text-3xl font-semibold focus:outline-none placeholder:text-white tracking-tight"
                )}
              />
            </div>
            <div className="flex shrink-0 space-x-3">
              {categories.map((categories, index) => (
                <Button
                  key={index}
                  value={categories}
                  variant="Filter"
                  size="xl"
                  className={cn(
                    `px-8 py-2.5 duration-300 transition-all ${
                      active === categories
                        ? "bg-white text-black"
                        : "hover:bg-zinc-500"
                    }`
                  )}
                  onClick={(e) => {
                    handleActive(e);
                    setCategory(e.currentTarget.value);
                  }}
                  onKeyDown={handleFilter}
                >
                  {categories}
                </Button>
              ))}
              <Button
                value={Text}
                variant="Filter"
                size="xl"
                className={cn(
                  `w-full px-5 py-2.5 flex items-center gap-3 duration-300 transition-all focus:hover-zinc-500 `,
                  {
                    "bg-white text-black": subactive,
                    "hover:bg-zinc-500": !subactive,
                  }
                )}
                onClick={(e) => {
                  setDropdown(!dropdown), handleActive(e);
                }}
                onKeyDown={handleFilter}
              >
                {Text}
                <ArrowChevonDownIcon
                  className={cn(
                    "fill-white duration-300 transition-all",
                    dropdown ? "rotate-180 " : "",
                    {
                      "fill-black": subactive,
                      "": !subactive,
                    }
                  )}
                />
              </Button>
              <motion.div
                ref={Ref}
                initial={false}
                animate={dropdown ? "open" : "closed"}
                variants={variants}
                className={cn(
                  "absolute right-24 top-20 w-[240px] shadow-lg border border-zinc-800 rounded-lg bg-[#121212]"
                )}
              >
                <div className="divide-y divide-zinc-800">
                  {Subcategories.map((category, index) => (
                    <Button
                      key={index}
                      value={category}
                      onClick={(e) => {
                        handleCategoryClick(e);
                        setCategory(e.currentTarget.value);
                        setText(e.currentTarget.value);
                      }}
                      onKeyDown={handleFilter}
                      className="w-full text-start p-5 hover:bg-zinc-800 focus:text-black focus:bg-white"
                    >
                      {category}
                    </Button>
                  ))}
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
    </div>
  );
}
