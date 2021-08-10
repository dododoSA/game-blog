import styles from 'styles/MainContents/Article/Article.module.scss';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      <Head>
        {/* TODO: https://lidqqq.dev/posts/serverside-hljs-in-nextjs */}
        <link
          rel='stylesheet'
          href='//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.spacer}>{children}</div>
      </div>
    </>
  );
};

export { Article };
