import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(["duration-150 transition-all"], {
  variants: {
    variant: {
      default: ["text-white"],
      Menu: [
        "px-5 py-8 relative flex gap-1.5 text-zinc-200 font-medium group hover:text-white",
      ],
      Filter: [
        "text-white font-semibold rounded-full bg-zinc-700 transition duration-150",
      ],
      Launcher: [
        "px-3.5 rounded-[4px] text-black  font-bold bg-[#fcaf17]",
      ],
    },
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
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
