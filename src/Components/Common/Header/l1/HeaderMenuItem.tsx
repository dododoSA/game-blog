import Link from 'next/link';
import styles from 'styles/Common/Header/l1/HeaderMenuItem.module.scss';
import cs from 'classnames';
import { useRouter } from 'next/router';

const HeaderMenuItem = ({ label, path }: { label: string; path: string }) => {
  const menuClass = cs(styles.menu_item, {
    [styles.current]: useRouter().pathname === path,
  });

  return (
    <Link href={path}>
      <a className={menuClass}>{label}</a>
    </Link>
  );
};

export { HeaderMenuItem };
