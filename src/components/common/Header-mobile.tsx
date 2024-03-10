import dynamic from "next/dynamic";
import SearchMobile from "../ui/navbar-mobile/Search-Mobile";
import FeaturedMobile from "../ui/navbar-mobile/Featured-Mobile";

const Logo = dynamic(() => import("../icons/Logo"));
const Hamburger = dynamic(() => import("../ui/navbar/Hamburger"));
const User = dynamic(() => import("../ui/navbar/User"));

export default function HeaderMobile() {
  return (
    <div className="lg:hidden ">
      <nav className="w-full h-[80px] px-10 border-b border-b-zinc-800 ">
        <div className="h-full flex justify-between items-center">
          <Hamburger />
          <Logo Href="/" className="flex" />
          <User />
        </div>
      </nav>
      <div>
        <SearchMobile />
        <FeaturedMobile />
      </div>
    </div>
  );
}
