import Link from "next/link"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const news = [
  {
    title: "Run Back the Classics with Bonuses on Original Heist Finales",
    image: "",
    date: new Date("2024-11-22"),
    category: "GTA Online",
    link: "#",
  },
  {
    title: "Prevent Doomsday for Double Rewards During Week 2 of The Heist Challenge",
    image: "",
    date: new Date("2024-11-21"),
    category: "GTA Online",
    link: "#",
  },
  {
    title: "CircoLoco Records Presents Prequel",
    image: "",
    date: new Date("2024-11-20"),
    category: "Featured Games",
    link: "#",
  },
  {
    title: "Get a Free Nagasaki Shinobi Motorcycle with GTA+",
    image: "",
    date: new Date("2024-11-19"),
    category: "GTA Online",
    link: "#",
  },
  {
    title: "Break into The Heist Challenge All Month Long",
    image: "",
    date: new Date("2024-11-18"),
    category: "GTA Online",
    link: "#",
  },
  {
    title: "Celebrate Thanksgiving Season in Red Dead Online with Trader Bonuses",
    image: "",
    date: new Date("2024-11-17"),
    category: "Red Dead Online",
    link: "#",
  },
]

export function NewswireSection() {
  return (
    <section className="py-12 px-6">
      <div className="container max-w-screen-2xl">
        <h2 className="mb-8 text-2xl font-bold text-white">Newswire</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <Link href={item.link} className="group">
                <CardContent className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="mb-2 text-sm text-white/60">
                      <span>{item.category}</span>
                      <span className="mx-2">•</span>
                      <span>{format(item.date, "MMMM d, yyyy")}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-white/80">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
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

