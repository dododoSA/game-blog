import styles from 'styles/Layouts/ArticleLayout.module.scss';

// 記事関連のページのレイアウト
const ArticleLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>
    <div className={styles.article_container}>
      <article className={styles.main_content}>{children}</article>
      <aside className={styles.side_bar}>side contents</aside>
    </div>
    <div>recent posts etc.</div>
  </div>
);

export { ArticleLayout };
