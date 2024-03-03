import ArrowChevonDownIcon from "./components/icons/ArrowChevonDown";
import NewtabIcon from "./components/icons/Newtab";
import { MenuNavItem } from "./types";

export const MenuItems: MenuNavItem[] = [
  {
    title: "Games",
    path: "",
    icon: <ArrowChevonDownIcon className="fill-white" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Grand Theft Auto V",
        path: "",
        ImgSrc: "/images/header/GTAV.jpg",
      },
      {
        title: "Grand Theft Auto Online",
        path: "",
        ImgSrc: "/images/header/GTAOnline.jpg",
      },
      {
        title: "Grand Theft Auto Trilogy",
        path: "",
        ImgSrc: "/images/header/GTATrilogy.jpg",
      },
      {
        title: "Red Dead Redemption 2",
        path: "",
        ImgSrc: "/images/header/RDR2.jpg",
      },
      {
        title: "Red Dead Redemption Online",
        path: "",
        ImgSrc: "/images/header/RDROnline.jpg",
      },
    ],
  },
  {
    title: "Newswire",
    path: "/Newswire",
    submenu: false,
  },
  {
    title: "Videos",
    path: "/Videos",
    submenu: false,
  },
  {
    title: "Downloads",
    path: "/Downloads",
    submenu: false,
  },
  {
    title: "Store",
    path: "",
    icon: <NewtabIcon />,
    submenu: false,
  },
  {
    title: "Support",
    path: "",
    icon: <NewtabIcon />,
    submenu: false,
  },
  {
    title: "More",
    path: "",
    icon: <ArrowChevonDownIcon className="fill-white"/>,
    submenu: true,
    subMenuItems: [
      {
        title: "Store",
        path: "/Store",
        icon: <NewtabIcon />,
      },
      {
        title: "Support",
        path: "/Support",
        icon: <NewtabIcon />,
      },
    ],
  },
];
