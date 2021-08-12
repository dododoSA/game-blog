import { ArticleLayout } from 'Components/Layouts/ArticleLayout';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IPost } from 'types/post';
import { Article } from 'Components/MainContents/Article/Article';
import { getBreadcrumbPaths, getPost } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

type Props = {
  breadcrumbPaths: {
    href: string;
    label: string;
  }[];
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

const MDX_PATH = 'theory/pglanguage/c';

export const getStaticProps: GetStaticProps = async () => {
  const { content, data } = getPost('index', MDX_PATH);
  const mdxSource = await serialize(content);
  const breadcrumbPaths = getBreadcrumbPaths(MDX_PATH);
  return {
    props: {
      breadcrumbPaths,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

const C = ({ breadcrumbPaths, source, frontMatter }: Props) => (
  <ArticleLayout breadcrumbPaths={breadcrumbPaths}>
    <Article source={source} frontMatter={frontMatter} />
  </ArticleLayout>
);

export default C;
