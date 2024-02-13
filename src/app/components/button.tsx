import { cn } from "../lib/utils";
type Props = {
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: Props) {
  return (
    <button
      className={cn(
        "px-5 py-8 relative text-zinc-200 font-medium group hover:text-white",
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 border-transparent group-hover:border-zinc-200 duration-300"
        )}
      ></span>
    </button>
  );
}
