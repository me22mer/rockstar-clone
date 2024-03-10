import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../icons/Logo"));
const User = dynamic(() => import("../ui/navbar/User"));
const Launcher = dynamic(() => import("../ui/navbar/Launcher"));
const Navbar = dynamic(() => import("../ui/navbar/Navbar"));
const Search = dynamic(() => import("../ui/navbar/Search"));

export default function Header() {
  return (
    <nav className="max-lg:hidden w-full h-[80px] px-20 border-b border-b-zinc-800 ">
      <div className="h-full flex justify-between items-center">
        <Logo Href="/" className="flex items-center xl:basis-1/6" />
        <Navbar />

        <div className="flex gap-7 items-center">
          <Launcher />
          <Search />
          <User />
        </div>
      </div>
    </nav>
  );
}
