import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(["duration-150 transition-all"], {
  variants: {
    variant: {
      default: ["text-white"],
      Menu: ["px-5 py-8 relative flex gap-3 text-zinc-200 font-medium group hover:text-white"],
      launcher: ["px-3.5 py-2.5 rounded-[4px] text-black  font-bold bg-[#fcaf17]"],
    },
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  size,
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ size, variant, className }))}
    >
      {children}
    </button>
  );
}
