"use client";

import Button from "@/components/Button/Button";
import { MenuNavItem } from "@/types";
import { MenuItems } from "@/constants";
import { useRouter } from "next/navigation";

const NavbarProp = ({ item }: { item: MenuNavItem }) => {
  const router = useRouter();

  return (
    <div className="">
      {item.submenu ? null : (
        <div className="w-full">
          <Button
            className="py-[12px] md:py-[18px] px-[32px] md:px-[36px] w-full flex justify-between items-center text-start text-white text-lg md:text-2xl font-semibold"
            onClick={() => router.push(item.path)}
            
          >
            {item.title}
            {item.icon}
          </Button>
        </div>
      )}
    </div>
  );
};

export default function NavbarMobile() {

  return (
    <div className="w-full h-full mt-5 mb-[18px]">
      {MenuItems.map((item, idx) => (
        <NavbarProp key={idx} item={item} />
      ))}
    </div>
  );
}
