import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

const games = [
  {
    title: "Grand Theft Auto VI",
    image: "",
    link: "#",
  },
  {
    title: "Red Dead Redemption 2",
    image: "",
    link: "#",
  },
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
]

export function GamesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {games.map((game) => (
        <Card key={game.title} className="border-0 bg-transparent">
          <CardContent className="p-0">
            <Link href={game.link} className="group relative block">
              {/* <Image
                src={game.image}
                alt={game.title}
                width={1200}
                height={600}
                className="aspect-[2/1] object-cover transition-all hover:opacity-90"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{game.title}</h2>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

