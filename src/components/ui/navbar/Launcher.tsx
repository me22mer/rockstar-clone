"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Button = dynamic(() => import("../../Button/Button"));

export default function Launcher() {
  const router = useRouter();

  return (
    <Button
      className="py-2"
      variant="Launcher"
      size="sm"
      onClick={() => router.push("", { scroll: false })}
    >
      GET LAUNCHER
    </Button>
  );
}
