"use client";

import { useState } from "react";
import Button from "../../Button/Button";
import SearchIcon from "../../icons/Search";
import { cn } from "@/lib/utils";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleSubMenu}>
        <SearchIcon />
      </Button>
      {isOpen && (
        <div className={cn("absolute w-full left-0 top-[5rem] bg-[#121212]")}>
          hello
        </div>
      )}
    </>
  );
}
