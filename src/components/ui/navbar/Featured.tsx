import Link from "next/link";
import Image from "next/image";

import { MenuItems } from "@/constants";
import { cn } from "@/lib/cn";
import ArrowRightIcon from "../../icons/ArrowRight";

export default function Featured() {
  const gamesMenuItems = MenuItems[0];

  return (
    <div className={cn(`absolute w-full left-0 top-[5rem] bg-[#121212] flex justify-center`)}>
      <div className="lg:max-w-[1920px] xl:w-full py-16 px-20 gap-20  flex flex-col justify-center">
        <div className="mb-5 flex justify-between ">
          <h1 className="text-3xl font-semibold">Featured Games</h1>
          <Link
            href=""
            className="flex gap-2 items-center text-xl font-semibold"
          >
            <span>VIEW ALL</span>
            <span>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
        <div className="gap-5 flex justify-between items-center">
          {gamesMenuItems.subMenuItems?.map((subItem, idx) => (
            <Link
              href={subItem.path}
              key={idx}
              className="border border-zinc-700/50 rounded-lg"
            >
              <Image
                src={subItem.ImgSrc ? subItem.ImgSrc : ""}
                className="gap-10 rounded-lg"
                alt={subItem.title}
                loading="lazy"
                quality={100}
                width={325}
                height={0}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
