import { ArticleLayout } from 'Components/Layouts/ArticleLayout';
import { Article } from 'Components/MainContents/Article/Article';
import { getAllPosts, getBreadcrumbPaths, getPost } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';
import { IPost } from 'types/post';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type Props = {
  breadcrumbPaths: {
    href: string;
    label: string;
  }[];
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const CPost = ({ breadcrumbPaths, source, frontMatter }: Props) => (
  <ArticleLayout breadcrumbPaths={breadcrumbPaths}>
    <Article source={source} frontMatter={frontMatter} />
  </ArticleLayout>
);

const MDX_PATH = 'theory/pglanguage/c';

export async function getStaticPaths() {
  // NOTE: Next.js は __dirname が使えないので動的にパスに応じた mdx を指定するのが難しい. よって category で検索する形で paths を取得
  // 一応 mdx を CMS で管理したりする可能性もあるので分けて保存したい
  const posts = getAllPosts(MDX_PATH, ['slug']);
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
  const { content, data } = getPost(params?.slug as string, MDX_PATH);
  const mdxSource = await serialize(content);
  const breadcrumbPaths = getBreadcrumbPaths(MDX_PATH, data as IPost);
  return {
    props: {
      breadcrumbPaths,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default CPost;
