import { twMerge } from "tailwind-merge";

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function Button({ className, children }: Props) {
  return (
    <button
      className={twMerge(
        "px-5 py-8 relative text-zinc-200 font-medium group hover:text-white",
        className
      )}
    >
      {children}
      <span
        className={twMerge(
          "absolute bottom-0 left-0 w-full h-1 bg-transparent border-b-2 border-transparent group-hover:border-zinc-200 duration-300"
        )}
      ></span>
    </button>
  );
}
