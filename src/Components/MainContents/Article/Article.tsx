import styles from 'styles/MainContents/Article/Article.module.scss';

const Article = ({ title, content }: { title: string; content: string }) => (
  <div className={styles.container}>
    <div className={styles.spacer}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  </div>
);

export { Article };
