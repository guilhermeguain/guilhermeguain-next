type HeaderProps = {
  title: string;
  logo?: string;
};

type MenuProps = {
  items: MenuItemProps[];
};

type MenuItemProps = {
  id: string;
  label: string;
  href: string;
};
