import Link from "next/link";
import Image from "next/image";
import { MenuItems } from "@/constants";
import Motion from "../../common/Motion";
import ArrowRightIcon from "../../icons/ArrowRight";

export default function Featured() {
  const gamesMenuItems = MenuItems[0];

  return (
    <Motion className="absolute w-full left-0 top-[5rem] bg-[#121212] ">
      <div className="flex justify-center">
        <div className="py-16 px-20">
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
          <div className="gap-3 flex justify-between">
            {gamesMenuItems.subMenuItems?.map((subItem, idx) => (
              <Link
              href={subItem.path}
              key={idx}
              className="border border-zinc-700/50"
              >
                <Image
                  src={subItem.ImgSrc ? subItem.ImgSrc : ""}
                  className="gap-10"
                  alt={subItem.title}
                  loading="lazy"
                  quality={100}
                  width={290}
                  height={0}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Motion>
  );
}
