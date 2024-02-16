export type MenuNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    ImgSrc?: string;
    submenu?: boolean;
    subMenuItems?: MenuNavItem[];
}