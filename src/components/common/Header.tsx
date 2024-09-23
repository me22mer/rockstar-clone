"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../icons/Logo";
import Navbar from "../ui/navbar/Navbar";
import Launcher from "../ui/navbar/Launcher";
import Search from "../ui/navbar/Search";
import User from "../ui/navbar/User";



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="max-lg:hidden w-full sticky top-0 z-50 h-[80px] px-20 border-b border-b-zinc-800 bg-black/95 backdrop-blur-lg"
      animate={{
        y: isScrolled ? -80 : 0,
        transition: { type: "tween", duration: 0.3 },
      }}
    >
      <div className="h-full flex justify-between items-center">
        <Logo Href="/" className="flex items-center xl:basis-1/6" />
        <Navbar />

        <div className="flex gap-7 items-center">
          <Launcher />
          <Search />
          <User />
        </div>
      </div>
    </motion.nav>
  );
}
