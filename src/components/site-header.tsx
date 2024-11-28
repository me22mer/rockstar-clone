"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ChevronRight, Globe, Menu, Search, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
} from "@/components/ui/dropdown-menu";

const languages = [
  "Deutsch",
  "English",
  "Español",
  "Español Latinoamérica",
  "Français",
  "Italiano",
  "日本語",
  "한국어",
  "Polski",
];

const helpItems = [
  "Support",
  "Legal",
  "Privacy Policy",
  "Cookies Policy",
  "Cookies Settings",
  "Do Not Sell My Information",
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const UserMenu = () => (
    <div className="w-full">
      <div className="mx-6 my-4 flex flex-col  bg-black/95 border-zinc-800 text-white ">
        <div className="flex flex-col bg-primary rounded">
          <Button
            variant="default"
            className="flex justify-start py-8 px-6 text-base focus:bg-white/10 focus:text-white"
          >
            Sign In
          </Button>
          <Button
            variant="default"
            className="flex justify-start py-8 px-6 text-base focus:bg-white/10 focus:text-white"
          >
            Sign Up
          </Button>
          <Button
            variant="default"
            className="flex justify-between py-8 px-6 text-base focus:bg-white/10 focus:text-white"
          >
            Help
          </Button>
        </div>
        {/* <div>
              <div className="w-56 bg-black/95 border-zinc-800 text-white">
                {helpItems.map((item) => (
                  <div
                    key={item}
                    className="py-3.5 px-5 focus:bg-white/10 focus:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div> */}
        <div className=" my-4" />
        <div className="flex justify-between items-center bg-primary rounded">
          <Button
            variant="default"
            className="w-full flex justify-start py-8 px-6 text-base focus:bg-white/10  focus:text-white"
          >
            <Globe className="mr-2 h-2 w-2" />
            Select a Language
          </Button>
        </div>
        {/* <div>
              <div
                className="w-56 bg-black/95 border-zinc-800 text-white"
                style={{ maxHeight: "400px", overflowY: "auto" }}
              >
                {languages.map((language) => (
                  <div
                    key={language}
                    className="py-3.5 px-5 focus:bg-white/10 focus:text-white"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div> */}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 px-6 w-screen flex justify-center items-center border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container h-24 max-w-screen-2xl flex justify-between xl:grid grid-flow-row grid-cols-3 items-center text">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src=""
              alt="Rockstar Games"
              className="h-8 w-8"
              height={32}
              width={32}
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
            className="text-white/70"
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
          {isMobile ? (
            <Drawer open={userMenuOpen} onOpenChange={setUserMenuOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/70"
                  aria-haspopup="menu"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="my-4 bg-black/95 text-white border-t border-zinc-800">
                <DrawerHeader>
                  <DrawerTitle className="text-center">Account</DrawerTitle>
                  <DrawerDescription className="text-center text-white/70">
                    Manage your account settings
                  </DrawerDescription>
                </DrawerHeader>
                <UserMenu />
              </DrawerContent>
            </Drawer>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white/70">
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
                    <DropdownMenuSubContent className="w-56 bg-black/95 border-zinc-800 text-white">
                      {helpItems.map((item) => (
                        <DropdownMenuItem
                          key={item}
                          className="py-3.5 px-5 focus:bg-white/10 focus:text-white"
                        >
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
                      style={{ maxHeight: "400px", overflowY: "auto" }}
                    >
                      {languages.map((language) => (
                        <DropdownMenuItem
                          key={language}
                          className="py-3.5 px-5 focus:bg-white/10 focus:text-white"
                        >
                          {language}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button className="hidden lg:inline-flex bg-[#fcaf17] text-black hover:bg-[#fcaf17]/90">
            GET IT NOW
          </Button>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white/70"
                aria-haspopup="menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="my-6 bg-black/95 text-white border-t border-zinc-800">
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <nav className="mx-4 flex flex-col space-y-4 p-4">
                <Link href="#" className="text-lg hover:text-white/70">
                  Games
                </Link>
                <Link href="#" className="text-lg hover:text-white/70">
                  Newswire
                </Link>
                <Link href="#" className="text-lg hover:text-white/70">
                  Videos
                </Link>
                <Link href="#" className="text-lg hover:text-white/70">
                  Downloads
                </Link>
                <Link href="#" className="text-lg hover:text-white/70">
                  Store
                </Link>
                <Link href="#" className="text-lg hover:text-white/70">
                  Support
                </Link>
              </nav>
              <DrawerFooter className="mx-4">
                <Button className="w-fullz py-[1.5rem] bg-[#fcaf17] text-black hover:bg-[#fcaf17]/90">
                  GET IT NOW
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
