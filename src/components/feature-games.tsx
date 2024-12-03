import Link from "next/link"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const games = [
  {
    title: "Grand Theft Auto V",
    image: "",
    link: "#",
  },
  {
    title: "Grand Theft Auto Online",
    image: "",
    link: "#",
  },
  {
    title: "Red Dead Redemption II",
    image: "",
    link: "#",
  },
  {
    title: "Red Dead Redemption",
    image: "",
    link: "#",
  },
]

export function FeaturedGames() {
  return (
    <section className="py-12 px-6 w-full flex justify-center">
      <div className="container max-w-screen-2xl">
        <h2 className="mb-8 text-2xl font-bold text-white">Featured Games</h2>
        <div className="mb-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            {/* <Image
              src=""
              alt="Grand Theft Auto VI"
              className="h-full w-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-3xl font-bold text-white">Grand Theft Auto VI</h3>
              <p className="mt-2 text-lg text-white/90">Coming 2025</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {games.map((game) => (
            <Link
              key={game.title}
              href={game.link}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              {/* <Image
                src={game.image}
                alt={game.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-sm font-bold text-white md:text-base">{game.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" className="text-foreground border-white/20 hover:bg-background/80">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

