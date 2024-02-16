import Logo from "../icons/Logo";
import Account from "../ui/Account";
import Launcher from "../ui/Launcher";
import Menu from "../ui/Menu";
import Search from "../ui/Search";

export default function Header() {
  return (
    <nav className="w-full h-[80px] px-20">
      <div className="flex justify-between items-center">
        <Logo Href="/" />
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
