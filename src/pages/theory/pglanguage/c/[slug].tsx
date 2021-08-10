import { ArticleLayout } from 'Components/Layouts/ArticleLayout';
import { Article } from 'Components/MainContents/Article/Article';
import { getPostFilteredByCategory, getPostsFilteredByCategory } from 'utils/mdxUtils';
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
      // TODO: 自動で取得できるようにする
      breadcrumbPaths: [
        {
          href: '/',
          label: 'HOME',
        },
        {
          href: '/theory',
          label: '理論編',
        },
        {
          href: '/theory/pglanguage',
          label: 'プログラミング言語',
        },
        {
          href: '/theory/pglanguage/c',
          label: 'C言語',
        },
        {
          href: `/theory/pglanguage/c/${data.slug}`,
          label: data.title,
        },
      ],
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default CPost;
