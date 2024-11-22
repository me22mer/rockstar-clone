import Link from "next/link"
import { Menu, Search, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-screen flex justify-center items-center border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-14 max-w-screen-3xl items-center">
        <div className="mr-4 flex flex-1 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="https://kzmp126vljbz1dw4wsx3.lite.vusercontent.net/placeholder.svg?height=1080&width=1920" alt="Rockstar Games" className="h-8 w-8" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden md:inline-flex bg-[#fcaf17] text-black hover:bg-[#fcaf17]/90">
            GET IT NOW
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white/70 hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/95 text-white border-white/10">
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
  )
}

