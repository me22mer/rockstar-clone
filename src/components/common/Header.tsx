import Logo from "../icons/Logo";
import Account from "../ui/Account";
import Launcher from "../ui/Launcher";
import Menu from "../ui/Menu";
import Search from "../ui/Search";
import { MenuItems } from "@/constants";

export default function Header() {
  return (
    <nav className="w-full h-[80px] px-20">
      <div className="flex justify-between items-center">
        <Logo className=""/>
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
