import Image from "next/image";

import Arrow_R_Icon from "@/app/icons/arrow-right";
import { cn } from "@/app/lib/utils";

type Props = {
  isOpen?: boolean;
  className?: string;
};

export default function GamesDropdown({ isOpen, className }: Props) {
  return (
    <div
      className={cn("absolute w-full left-0 top-[5rem]", className, {
        "opacity-100 visible transition-all ease-linear duration-150": isOpen,
        "opacity-0 invisible transition-all ease-linear duration-150": !isOpen,
      })}
    >
      <div className=" py-16 bg-[#121212] ">
        <div className="px-20 mb-5 flex justify-between ">
          <h1 className="text-3xl font-semibold">Featured Games</h1>
          <a href="" className="flex gap-2 items-center text-xl font-semibold">
            <h2>VIEW ALL</h2>{" "}
            <span>
              <Arrow_R_Icon />
            </span>
          </a>
        </div>
        <div className="px-20">
          <div className="flex justify-between">
            <div className=" border border-zinc-700/50">
              <a href="">
                <Image
                  src="/images/header/V.jpg"
                  alt=""
                  width={290}
                  height={0}
                />
              </a>
            </div>
            <div className=" border border-zinc-700/50">
              <a href="">
                <Image
                  src="/images/header/GTAOnline.jpg"
                  alt=""
                  width={290}
                  height={0}
                />
              </a>
            </div>
            <div className=" border border-zinc-700/50">
              <a href="">
                <Image
                  src="/images/header/GTATrilogy.jpg"
                  alt=""
                  width={290}
                  height={0}
                />
              </a>
            </div>
            <div className=" border border-zinc-700/50">
              <a href="">
                <Image
                  src="/images/header/reddeadredemption2.jpg"
                  alt=""
                  width={290}
                  height={0}
                />
              </a>
            </div>
            <div className=" border border-zinc-700/50">
              <a href="">
                <Image
                  src="/images/header/reddeadonline.jpg"
                  alt=""
                  width={290}
                  height={0}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
