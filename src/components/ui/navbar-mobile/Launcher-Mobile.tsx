"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Button = dynamic(() => import("../../Button/Button"));

export default function LauncherMobile() {
  const router = useRouter();

  return (
    <div className="w-full px-[32px] pb-10 md:px-[36px]">
      <Button
        className="w-full p-4 text-md md:text-xl"
        variant="Launcher"
        onClick={() => router.push("", { scroll: false })}
      >
        GET LAUNCHER
      </Button>
    </div>
  );
}
