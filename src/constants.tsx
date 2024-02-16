import ArrowChevonDownIcon from "./components/icons/ArrowChevonDown";
import NewtabIcon from "./components/icons/Newtab";
import { MenuNavItem } from "./types";

export const MenuItems: MenuNavItem[] = [
  {
    title: "Games",
    path: "/",
    icon: <ArrowChevonDownIcon />,
    submenu: true,
    subMenuItems: [
      {
        title: "Grand Theft Auto V",
        path: "/",
        imgSrc: "images/header/V.jpg",
      },
      {
        title: "Grand Theft Auto Online",
        path: "/",
        imgSrc: "images/header/GTAOnline.jpg",
      },
      {
        title: "Grand Theft Auto Trilogy",
        path: "/",
        imgSrc: "images/header/GTATrilogy.jpg",
      },
      {
        title: "Red Dead Redemption 2",
        path: "/",
        imgSrc: "images/header/reddeadredemption2",
      },
      {
        title: "Red Dead Redemption Online",
        path: "/",
        imgSrc: "images/header/reddeadonline.jpg",
      },
    ],
  },
  {
    title: "Newswire",
    path: "/Newswire",
  },
  {
    title: "Videos",
    path: "/Videos",
  },
  {
    title: "Downloads",
    path: "/Downloads",
  },
  {
    title: "Store",
    path: "www.store.rockstargames.com",
    icon: <NewtabIcon />,
  },
  {
    title: "Support",
    path: "/Support",
    icon: <NewtabIcon />,
  },
  {
    title: "More",
    path: "",
    icon: <ArrowChevonDownIcon />,
    submenu: true,
    subMenuItems: [
      {
        title: "Store",
        path: "/Store",
      },
      {
        title: "Support",
        path: "/Support",
      },
    ],
  },
];
