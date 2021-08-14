import Link from 'next/link';
import styles from 'styles/Common/Header/l1/HeaderMenuItem.module.scss';
import cs from 'classnames';
import { useRouter } from 'next/router';

type MenuItemProps = {
  label: string;
  path: string;
  child?: {
    label: string;
    path: string;
    child?: {
      label: string;
      path: string;
    }[];
  }[];
};

const HeaderMenuItem = ({ label, path, child }: MenuItemProps) => {
  const menuClass = cs(styles.menu_item, {
    [styles.current]: useRouter().pathname.includes(path),
  });

  let childMenu;
  if (child) {
    childMenu = child.map((c) => {
      let grandchildMenu;
      if (c.child) {
        grandchildMenu = c.child.map((gc) => (
          <li key={gc.label}>
            <Link href={gc.path}>
              <a>{gc.label}</a>
            </Link>
          </li>
        ));
      }

      return (
        <li key={c.label}>
          <Link href={c.path}>
            <a>{c.label}</a>
          </Link>
          {grandchildMenu && <ul>{grandchildMenu}</ul>}
        </li>
      );
    });
  }

  return (
    <div className={styles.container}>
      <Link href={path}>
        <a className={menuClass}>{label}</a>
      </Link>

      {childMenu && <ul>{childMenu}</ul>}
    </div>
  );
};

HeaderMenuItem.defaultProps = {
  child: undefined,
};

export { HeaderMenuItem };
