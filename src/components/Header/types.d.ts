export type HeaderProps = {
  title: string;
  logo?: string;
};

export type MenuProps = {
  items: MenuItemProps[];
};

export type MenuItemProps = {
  id: string;
  href: string;
};
