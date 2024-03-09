"use client";
import { useState, useRef, useCallback } from "react";

import Button from "../../Button/Button";
import SearchIcon from "../../icons/Search";
import ArrowChevonDownIcon from "@/components/icons/ArrowChevonDown";
import CloseIcon from "@/components/icons/Close";
import Motion from "@/components/common/Motion";

import { cn } from "@/lib/cn";

export default function SearchMobile() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [active, setActive] = useState<String | null>(null);
  const [subactive, setSubActive] = useState(false);

  const [updateValue, setUpdateValue] = useState("Community");

  const handleFilter = useCallback(
    (
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
    },
    [search, category]
  );

  const handleActive = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryValue = e.currentTarget.value;
    setActive(categoryValue);
    setSubActive(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryValue = e.currentTarget.value;
    setUpdateValue(categoryValue);
    setDropdown(false);
    setSubActive(true);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSubActive(false);
    setDropdown(false);
    setUpdateValue("Community"), setSearch("");
  }, []);

  const categories = ["Games", "Posts", "Videos"];
  const Subcategories = [
    "Users",
    "Crews",
    "Jobs",
    "User Photos",
    "User Videos",
  ];

  return (
    <div className="absolute w-full left-0 top-[5rem]">
      <div className={cn("px-10 py-1.5 bg-zinc-800 ")}>
        <div
          className={cn("flex gap-3 items-center align-middle", {
            "justify-between": open,
          })}
        >
          <div className="flex">
            <SearchIcon className="w-6 h-6" />
          </div>
          <Button onClick={handleOpen} className="w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search Rockstar Games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleFilter}
                className={cn(
                  "py-2.5 w-full bg-transparent text-xl font-normal focus:outline-[#fcaf17] placeholder:text-white tracking-tight"
                )}
              />
            </div>
          </Button>
          <Motion isOpen={open}>
            <Button onClick={handleClose}>
              <CloseIcon className="w-6 h-6" />
            </Button>
          </Motion>
        </div>
      </div>
      <Motion
        isOpen={open}
        className="px-8 max-sm:px-2 py-5 border-b border-b-zinc-800 "
      >
        <div className="flex shrink-0 space-x-3 overflow-x-auto scrollbar-none">
          {categories.map((categories, index) => (
            <Button
              key={index}
              value={categories}
              variant="Filter"
              size="md"
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
          <div className="">
            <Button
              value={updateValue}
              variant="Filter"
              size="md"
              className={cn(
                ` px-5 py-2.5 flex items-center gap-3 duration-300 transition-all focus:hover-zinc-500 `,
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
              {updateValue}
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
            <Motion
              isOpen={dropdown}
              setIsOpen={[setDropdown]}
              className="absolute max-md:right-0  w-[240px] flex shadow-lg border border-zinc-800 rounded-lg "
            >
              <div className=" bg-[#121212] divide-y divide-zinc-800">
                {Subcategories.map((category, index) => (
                  <Button
                    key={index}
                    value={category}
                    onClick={(e) => {
                      handleClick(e);
                      setCategory(e.currentTarget.value);
                      setUpdateValue(e.currentTarget.value);
                    }}
                    onKeyDown={handleFilter}
                    className="w-full text-start p-5 hover:bg-zinc-800 focus:text-black focus:bg-white"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Motion>
          </div>
        </div>
      </Motion>
    </div>
  );
}
