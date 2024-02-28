import Logo from "../icons/Logo";
import Account from "../ui/navbar/Account";
import Launcher from "../ui/navbar/Launcher";
import Menu from "../ui/navbar/Menu";
import Filter from "../ui/navbar/Filter";

export default function Header() {
  return (
    <nav className="w-full h-[80px] px-20 border-b border-b-zinc-800 ">
      <div className="h-full flex justify-between items-center">
        <Logo Href="/" className="flex items-center xl:basis-1/6" />
        <Menu />

        <div className="flex gap-7 items-center">
          <Launcher />
          <Filter />
          <Account />
        </div>
      </div>
    </nav>
  );
}
