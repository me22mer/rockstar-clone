export type MenuNavItem = {
    id?: number | undefined,
    title: string;
    path: string;
    icon?: JSX.Element;
    ImgSrc?: string;
    submenu?: boolean;
    subMenuItems?: MenuNavItem[];
}