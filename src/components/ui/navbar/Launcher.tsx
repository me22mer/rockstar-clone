"use client";

import Button from "../../Button/Button";
import { useRouter } from "next/navigation";

export default function Launcher() {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="Launcher"
      size="sm"
      onClick={() => router.push("", { scroll: false })}
    >
      GET LAUNCHER
    </Button>
  );
}
