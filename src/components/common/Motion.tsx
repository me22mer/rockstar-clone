import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Motion({ children,className }: Props) {
  const containerRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      ref={containerRef}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
}
