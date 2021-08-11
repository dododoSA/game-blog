import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { IPost } from 'types/post';
import { BREADCRUMB_LABEL } from 'const/breadcrumbLabel';

const POSTS_PATH = join(process.cwd(), 'posts');

const getPostFilePaths = (MDX_PATH: string) =>
  fs.readdirSync(join(POSTS_PATH, MDX_PATH)).filter((path) => /\.mdx?$/.test(path));

const getPost = (slug: string, path: string) => {
  const fullPath = join(POSTS_PATH, path, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
};

type Items = {
  [key: string]: string;
};

const getPostItems = (fileName: string, dirPath: string, fields: string[] = []) => {
  const slug = fileName.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug, dirPath);
  const items: Items = {};

  // Ensure only the minimal needed data is exposed TODO: 確認
  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

const getAllPosts = (dirPath: string, fields: string[] = []) => {
  const filePaths = getPostFilePaths(dirPath);
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, dirPath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

const getBreadcrumbPaths = (
  path: string,
  frontMatter?: IPost,
): {
  href: string;
  label: string;
}[] => {
  const tmpPath = `//${path}`;
  const dividedPath = tmpPath.split(/(?=\/)/g);
  let href = '';
  const breadcrumbPaths = dividedPath.map((p, index) => {
    if (index !== 0) {
      href += p;
    }
    return {
      href: index === 0 ? '/' : href,
      // ディレクトリを自動で取得できない以上これは手動で確認するしかない
      label: BREADCRUMB_LABEL.get(p) as string,
    };
  });

  if (frontMatter) {
    breadcrumbPaths.push({
      href: `${href}/${frontMatter.slug}`,
      label: frontMatter.title,
    });
  }

  return breadcrumbPaths;
};

export { getPost, getAllPosts, getBreadcrumbPaths };
