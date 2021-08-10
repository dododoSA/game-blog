import { ArticleLayout } from 'Components/Layouts/ArticleLayout';
import { Article } from 'Components/MainContents/Article/Article';
import { getPostFilteredByCategory, getPostsFilteredByCategory } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';
import { IPost } from 'types/post';
import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const components = {
  // eslint-disable-next-line react/destructuring-assignment,react/display-name
  h2: (props: any) => <h2 style={{ color: 'red' }}>{props.children}</h2>,
};

const CPost = ({ source, frontMatter }: Props) => (
  <ArticleLayout>
    <Article>
      <MDXProvider components={components}>
        <h1>{frontMatter.title}</h1>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <MDXRemote {...source} />
      </MDXProvider>
    </Article>
  </ArticleLayout>
);

export async function getStaticPaths() {
  // NOTE: Next.js は __dirname が使えないので動的にパスに応じた mdx を指定するのが難しい. よって category で検索する形で paths を取得
  // 一応 mdx を CMS で管理したりする可能性もあるので分けて保存したい
  const posts = getPostsFilteredByCategory(['slug'], { subcategory2: 'c' });

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = await getPostFilteredByCategory(params?.slug as string, { subcategory2: 'c' });
  const mdxSource = await serialize(content);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default CPost;
