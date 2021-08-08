import Link from 'next/link';
import styles from 'styles/Common/Header/l1/SiteLogo.module.scss';

const SiteLogo = () => (
  <div className={styles.container}>
    <Link href='/'>
      <a className={styles.logo}>Rのゲームプログラミング教室</a>
    </Link>
  </div>
);

export { SiteLogo };
