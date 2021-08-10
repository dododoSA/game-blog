import { BreadcrumbNavigation } from 'Components/Common/BreadcrumbNavigation/BreadcrumbNavigation';
import { Header } from 'Components/Common/Header/Header';
import { Footer } from 'Components/Common/Footer/Footer';
import styles from 'styles/Layouts/CommonLayout.module.scss';

// 全ページ共通のレイアウト
const CommonLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>
      <div className={styles.container}>
        {children}
      </div>
    </main>
    <Footer />
  </>
);

export { CommonLayout };
