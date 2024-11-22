import Link from "next/link"
import { Facebook, Instagram, Twitch, Twitter, Youtube } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="px-6 flex justify-center border-t border-white/10 bg-black">
      <div className="container max-w-screen-2xl py-12">
        <div className="mb-12 text-center">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Rockstar Games"
            className="mx-auto h-10 w-10"
          />
          <h2 className="mt-4 text-xl font-bold text-white">
            Subscribe to the Rockstar Games Email List
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Sign up for news, updates, and exclusive offers.
          </p>
          <form className="mx-auto mt-6 flex md:flex-col max-w-md gap-2">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
            <Button className="bg-white text-black hover:bg-white/90">
              SUBSCRIBE NOW
            </Button>
          </form>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Community</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Social Club
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Twitch className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

