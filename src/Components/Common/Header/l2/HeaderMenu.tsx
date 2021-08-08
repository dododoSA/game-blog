import { HeaderMenuItem } from 'Components/Common/Header/l1/HeaderMenuItem';
import { MENU_ITEMS } from 'const/header/headerMenuItems';
import styles from 'styles/Common/Header/l2/HeaderMenu.module.scss';

const HeaderMenu = () => {
  const menuItems = MENU_ITEMS.map((m) => (
    <li key={m.label}>
      <HeaderMenuItem path={m.path} label={m.label} />
    </li>
  ));

  return (
    <nav className={styles.nav_bar}>
      <ul>{menuItems}</ul>
    </nav>
  );
};

export { HeaderMenu };
