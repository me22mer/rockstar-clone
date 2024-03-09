"use client";

import { AnimatePresence, motion } from "framer-motion";

import useAutoClose from "@/utils/useAutoClose";
import { cn } from "@/lib/cn";

type Props = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>[];
  targetRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
};

export default function Motion({
  isOpen,
  setIsOpen,
  targetRef,
  className,
  children,
}: Props) {
  useAutoClose({
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    targetRef: targetRef,
  });

  return (
    <AnimatePresence>
      <motion.div
        style={{ overflow: "hidden" }}
        initial={{ height: 0, opacity: 0, display: "none" }}
        animate={
          isOpen
            ? { height: "max-content", opacity: 1, display: "block" }
            : { height: 0, opacity: 0, transitionEnd: { display: "none" } }
        }
        transition={{ duration: 0.5 }}
        exit={{ height: 0, opacity: 0, display: "none" }}
      >
        <div ref={targetRef} className={cn(className)}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
