import { HeaderMenuItem } from 'Components/Common/Header/l1/HeaderMenuItem';
import { MENU_ITEMS } from 'const/header/headerMenuItems';

const HeaderMenu = () => {
  const menuItems = MENU_ITEMS.map((m) => <HeaderMenuItem key={m.label} path={m.path} label={m.label} />);
  return <nav>{menuItems}</nav>;
};

export { HeaderMenu };
