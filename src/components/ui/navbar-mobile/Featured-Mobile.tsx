import Link from "next/link";
import Image from "next/image";

import { MenuItems } from "@/constants";
import { cn } from "@/lib/cn";
import ArrowRightIcon from "../../icons/ArrowRight";

export default function FeaturedMobile() {
  const gamesMenuItems = MenuItems[0];

  return (
    <div className={cn(`w-full bg-black overflow-auto`)}>
      <div className="flex flex-col justify-center">
        <div className="pt-8 pb-4 px-10">
          <div className=" flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Games</h1>
            <Link
              href=""
              className="flex gap-2 items-center text-sm font-semibold"
            >
              <span>VIEW ALL</span>
              <span>
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
        <div className="overflow-y-scroll scrollbar-none">
          <div className="gap-3 w-max flex flex-row px-10">
            {gamesMenuItems.subMenuItems?.map((subItem, idx) => (
              <div key={idx} className=" border border-zinc-700/50">
                <Image
                  src={subItem.ImgSrc ? subItem.ImgSrc : ""}
                  width={220}
                  height={190}
                  sizes="(max-width: 1024px) 80vw"
                  alt={subItem.title}
                  loading="lazy"
                  quality={90}
                  style={{ objectFit: "contain" }}
                  className="w-full h-auto "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
