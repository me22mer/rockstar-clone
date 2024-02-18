import Link from "next/link";

import { MenuItems } from "@/constants";
import { cn } from "@/lib/utils";
import Motion from "../common/Motion";

export default function More() {
  const moreMenuItem = MenuItems[6];
  return (
    <Motion className="absolute mt-3 w-[245px]">
      <ul className={cn(" bg-zinc-900 rounded-md divide-y divide-zinc-800")}>
        {moreMenuItem.subMenuItems?.map((subItem, idx) => (
          <li key={idx} className="text-sm font-medium ">
            <Link
              href={subItem.path}
              className={cn(
                "p-5  flex items-center justify-between rounded-md hover:bg-zinc-800 "
              )}
            >
              {subItem.title}
              {subItem.icon}
            </Link>
          </li>
        ))}
      </ul>
    </Motion>
  );
}
