export type MenuNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    imgSrc?: string;
    submenu?: boolean;
    subMenuItems?: MenuNavItem[];
}