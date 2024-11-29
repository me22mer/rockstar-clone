"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/cn";
import { Link } from "next-view-transitions";

const slides = [
  {
    title: "Grand Theft Auto VI",
    subtitle: "Trailer 1",
    image: "/images/hero/GTAVI.png",
    video: "gta-vi-trailer",
  },
  {
    title: "Red Dead Redemption II",
    subtitle: "Out Now",
    image: "",
  },
  {
    title: "Grand Theft Auto Online",
    subtitle: "Bottom Dollar Bounties",
    image: "",
  },
  {
    title: "Grand Theft Auto Online",
    subtitle: "The Cluckin’ Bell Farm Raid",
    image: "",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full">
      <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] overflow-hidden">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover"
                    fill
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="max-md:hidden absolute inset-0 flex flex-col justify-end sm:justify-center items-start p-6 sm:p-10">
          <div className="container max-w-screen-2xl">
            <div className="max-w-lg space-y-2 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90">
                {slides[current].subtitle}
              </p>
              <Link href={`/videos/${slides[current].video}`}>
                {" "}
                <Button className="mt-4 w-[220px] h-16 bg-white text-black hover:bg-white/90 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                  WATCH NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-md:hidden absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "transition-all",
                index === current
                  ? "w-12 sm:w-20 h-3 sm:h-5 bg-white rounded-full"
                  : "w-3 sm:w-5 h-3 sm:h-5 bg-white/50 rounded-full hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden relative flex flex-col justify-end sm:justify-center items-start p-6 sm:p-10">
        <div className="container max-w-screen-2xl">
          <div className="max-w-lg space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              {slides[current].subtitle}
            </p>
          </div>
        </div>
        <Link href={`/videos/${slides[current].video}`} className="w-full">
          {" "}
          <Button className="mt-4 h-14 w-full bg-white text-black hover:bg-white/90 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
            WATCH NOW
          </Button>
        </Link>
        <div className="mt-8 flex items-center gap-4 sm:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "transition-all",
                index === current
                  ? "w-20 sm:w-20 h-5 bg-white rounded-full"
                  : "w-5 h-5 bg-white/50 rounded-full hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
