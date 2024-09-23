"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const slides = [
  {
    imageSrc:
      "https://videos-rockstargames-com.akamaized.net/v4/rkoCtr1r/art/global.jpg",
    title: "Grand Theft Auto VI",
    description: "Trailer 1",
    watchNowHref: "/",
  },
  {
    imageSrc:
      "https://videos-rockstargames-com.akamaized.net/v4/oa46rs8r/art/global.jpg",
    title: "Grand Theft Auto Online",
    description: "Bottom Dollar Bounties",
    watchNowHref: "/",
  },
  {
    imageSrc:
      "https://videos-rockstargames-com.akamaized.net/v4/9146182r/art/global.jpg",
    title: "Grand Theft Auto Online",
    description: "Benefactor Takes Over the GTA Online Auto Scene",
    watchNowHref: "/",
  },
  {
    imageSrc:
      "https://videos-rockstargames-com.akamaized.net/v4/r3175t5r/art/global.jpg",
    title: "Grand Theft Auto Online",
    description: "The Cluckin' Bell Farm Raid",
    watchNowHref: "/",
  },
];

export default function Billboard() {
  const [activeButton, setActiveButton] = useState<number>(0);
  const router = useRouter();

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  const handleWatchNowClick = () => {
    router.push(slides[activeButton].watchNowHref);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col xl:flex-row w-full overflow-hidden">
        <motion.div
          className="w-full xl:w-[70%] relative aspect-video"
          key={activeButton}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[activeButton].imageSrc}
            alt={slides[activeButton].title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </motion.div>

        <div className="w-full xl:w-[40%] py-10 xl:py-20 px-10 xl:px-24 space-y-10 flex flex-col justify-between bg-black">
          <div>
            <h4 className="mb-3 text-base font-bold text-white">
              {slides[activeButton].title}
            </h4>
            <h2 className="mb-10 text-4xl xl:text-5xl font-bold text-white">
              {slides[activeButton].description}
            </h2>

            <Button
              onClick={handleWatchNowClick}
              className="xl:w-max w-full py-3 px-6 xl:py-5 xl:px-[65px] text-lg xl:text-2xl font-bold border border-white rounded-lg hover:bg-[#e19808] hover:text-black hover:border-[#e19808] text-white transition-colors duration-300"
            >
              WATCH NOW
            </Button>
          </div>
          <div className="flex gap-5">
            {slides.map((_, index) => (
              <Button
                key={index}
                onClick={() => handleClick(index)}
                className={`md:h-5 h-3.5 md:w-5 w-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                  activeButton === index
                    ? "bg-white md:w-20 w-14"
                    : "bg-zinc-600 md:w-5 w-3.5 hover:bg-zinc-400"
                }`}
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
