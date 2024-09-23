import Link from "next/link";
import Image from "next/image";

import { MenuItems } from "@/constants";
import { cn } from "@/lib/cn";
import ArrowRightIcon from "../../icons/ArrowRight";

export default function FeaturedMobile() {
  const gamesMenuItems = MenuItems[0];

  return (
    <div className={cn(`w-full overflow-auto z-50`)}>
      <div className="flex flex-col justify-center">
        <div className="pt-8 pb-4 px-8 md:px-10">
          <div className=" flex justify-between items-center">
            <h1 className="text-white text-lg md:text-2xl font-semibold">
              Games
            </h1>
            <Link
              href=""
              className="flex gap-2 items-center text-xs md:text-sm font-semibold"
            >
              <span>VIEW ALL</span>
              <span>
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
        <div className="overflow-y-scroll scrollbar-none">
          <div className="gap-3 w-max flex flex-row px-8 md:px-10">
            {gamesMenuItems.subMenuItems?.map((subItem, idx) => (
              <Link
                key={idx}
                href={subItem.path}
                className=" w-[250px] h-[300px] flex-shrink-0 relative"
              >
                <Image
                  src={subItem.ImgSrc ? subItem.ImgSrc : ""}
                  sizes="(max-width: 1024px) 65vw, (max-width: 768px) 20vw"
                  alt={subItem.title}
                  loading="lazy"
                  fill
                  quality={90}
                  className="w-full h-full border border-zinc-700/50"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
