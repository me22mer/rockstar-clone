"use client"

import Link from "next/link";
import { ChevronRight, Globe, Menu, Search, User } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import Image from "next/image";

const languages = [
  "Deutsch",
  "English",
  "Español",
  "Español Latinoamérica",
  "Français",
  "Italiano",
  "日本語",
  "한국어",
  "Polski"
]

const helpItems = [
  "Support",
  "Legal",
  "Privacy Policy",
  "Cookies Policy",
  "Cookies Settings",
  "Do Not Sell My Information"
]

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-6 w-screen flex justify-center items-center border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container h-24 max-w-screen-2xl flex justify-between xl:grid grid-flow-row grid-cols-3 items-center text">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src=""
              alt="Rockstar Games"
              className="h-8 w-8"
              height={0}
              width={0}
            />
          </Link>
        </div>
        <div>
          <nav className="hidden lg:flex items-center space-x-10 text-base font-medium">
            <Link href="#" className="text-white/70 hover:text-white">
              Games
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Newswire
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Videos
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Downloads
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Store
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Support
            </Link>
          </nav>
        </div>
        <div className="flex justify-end items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 "
            onClick={() => setOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command className="bg-black/95 border-zinc-800">
              <CommandInput placeholder="Search Rockstar Games..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Games">
                  <CommandItem>Grand Theft Auto V</CommandItem>
                  <CommandItem>Red Dead Redemption 2</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Categories">
                  <CommandItem>Games</CommandItem>
                  <CommandItem>Posts</CommandItem>
                  <CommandItem>Videos</CommandItem>
                  <CommandItem>Community</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 "
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-black/95 border-zinc-800 text-white">
              <DropdownMenuItem className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                Sign Up
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                  Help
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="w-56 bg-black/95 border-zinc-800 text-white ">
                    {helpItems.map((item) => (
                      <DropdownMenuItem key={item} className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                  <Globe className="mr-2 h-4 w-4" />
                  Select a Language
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent 
                    className="w-56 bg-black/95 border-zinc-800 text-white"
                    style={{ maxHeight: '400px', overflowY: 'auto' }}
                  >
                    {languages.map((language) => (
                      <DropdownMenuItem key={language} className="py-3.5 px-5 focus:bg-white/10 focus:text-white">
                        {language}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="hidden lg:inline-flex bg-[#fcaf17] text-black hover:bg-[#fcaf17]/90">
            GET IT NOW
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white/70 "
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black/95 text-white border-white/10"
            >
              <nav className="flex flex-col space-y-4">
                <Link href="#" className="text-lg">
                  Games
                </Link>
                <Link href="#" className="text-lg">
                  Newswire
                </Link>
                <Link href="#" className="text-lg">
                  Videos
                </Link>
                <Link href="#" className="text-lg">
                  Downloads
                </Link>
                <Link href="#" className="text-lg">
                  Store
                </Link>
                <Link href="#" className="text-lg">
                  Support
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

