import styles from 'styles/Layouts/ArticleLayout.module.scss';
import { SideCard } from 'Components/SideContents/SideCard';
import { BreadcrumbNavigation } from 'Components/Common/BreadcrumbNavigation/BreadcrumbNavigation';

// 記事関連のページのレイアウト
const ArticleLayout = ({
  breadcrumbPaths,
  children,
}: {
  breadcrumbPaths: {
    href: string;
    label: string;
  }[];
  children: React.ReactNode;
}) => (
  <div className={styles.container}>
    <BreadcrumbNavigation paths={breadcrumbPaths} />
    <div className={styles.article_wrapper}>
      <article className={styles.main_content}>{children}</article>
      <aside className={styles.side_bar}>
        <SideCard>
          <p>hello</p>
        </SideCard>
      </aside>
    </div>
    <div>recent posts etc.</div>
  </div>
);
export { ArticleLayout };
