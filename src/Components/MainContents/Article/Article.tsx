import styles from 'styles/MainContents/Article/Article.module.scss';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IPost } from 'types/post';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const Article = ({ source, frontMatter }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div className={styles.container}>
      <MDXProvider components={{}}>
        <div>{frontMatter.date}</div>
        {/* Typo防止のためh1はここで定義 */}
        <h1>{frontMatter.title}</h1>
        {/* ライブラリの書き方なので ignore */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <MDXRemote {...source} />
      </MDXProvider>
    </div>
  );
};

export { Article };
