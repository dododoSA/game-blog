import styles from 'styles/MainContents/Article/Article.module.scss';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import Head from 'next/head';
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
    <>
      <Head>
        {/* TODO: https://lidqqq.dev/posts/serverside-hljs-in-nextjs */}
        <link
          rel='stylesheet'
          href='//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css'
        />
      </Head>
      <div className={styles.container}>
        <MDXProvider components={{}}>
          <h1>{frontMatter.title}</h1>
          {/* ライブラリの書き方なので ignore */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <MDXRemote {...source} />
        </MDXProvider>
      </div>
    </>
  );
};

export { Article };
