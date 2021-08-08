import { SiteLogo } from 'Components/Common/Header/l1/SiteLogo';
import { HeaderMenu } from 'Components/Common/Header/l2/HeaderMenu';
import styles from 'styles/Common/Header/Header.module.scss';

const Header = () => (
  <header>
    <div className={styles.logo_wrapper}>
      <SiteLogo />
    </div>
    <div>
      <HeaderMenu />
    </div>
  </header>
);

export { Header };
