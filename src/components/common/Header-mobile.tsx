import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../icons/Logo"));
const Hamburger = dynamic(() => import("../ui/navbar/Hamburger"));
const Account = dynamic(() => import("../ui/navbar/Account"));

export default function HeaderMobile() {
  return (
    <nav className="lg:hidden w-full h-[80px] px-10 border-b border-b-zinc-800 ">
      <div className="h-full flex justify-between items-center">
        <Hamburger />
        <Logo Href="/" className="flex"/>
        <Account />
      </div>
    </nav>
  );
}
