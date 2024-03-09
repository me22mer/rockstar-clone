import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../icons/Logo"));
const Account = dynamic(() => import("../ui/navbar/Account"));
const Launcher = dynamic(() => import("../ui/navbar/Launcher"));
const Menu = dynamic(() => import("../ui/navbar/Menu"));
const Search = dynamic(() => import("../ui/navbar/Search"));

export default function Header() {
  return (
    <nav className="max-lg:hidden w-full h-[80px] px-20 border-b border-b-zinc-800 ">
      <div className="h-full flex justify-between items-center">
        <Logo Href="/" className="flex items-center xl:basis-1/6" />
        <Menu />

        <div className="flex gap-7 items-center">
          <Launcher />
          <Search />
          <Account />
        </div>
      </div>
    </nav>
  );
}
