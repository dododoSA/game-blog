import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// TODO: リファクタリング

const POSTS_PATH = join(process.cwd(), 'posts');

const getPostFilePaths = () => fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

const getPost = (slug: string) => {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
};

type Items = {
  [key: string]: string;
};

const getPostItems = (filePath: string, fields: string[] = []) => {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug);
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

const getPostsFilteredByCategory = (
  fields: string[] = [],
  {
    category,
    subcategory1,
    subcategory2,
  }: {
    category?: string;
    subcategory1?: string;
    subcategory2?: string;
  },
) => {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields.concat(['category', 'subcategory1', 'subcategory2'])))
    .filter(
      (postItem) =>
        (!category || category === postItem.category) &&
        (!subcategory1 || subcategory1 === postItem.subcategory1) &&
        (!subcategory2 || subcategory2 === postItem.subcategory2),
    )
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // NOTE: 本来必要のない category もあるが検索上しょうがないので一旦放置
  return posts;
};

const getAllPosts = (fields: string[] = []) => {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

const getPostFilteredByCategory = (
  slug: string,
  { category, subcategory1, subcategory2 }: { category?: string; subcategory1?: string; subcategory2?: string },
) => {
  const filePaths = getPostFilePaths();
  const filteredPaths = filePaths.filter((filePath) => {
    const postItem = getPostItems(filePath, ['slug']);
    return (
      category === postItem.category &&
      (!subcategory1 || subcategory1 === postItem.subcategory1) &&
      (!subcategory2 || !postItem.subcategory2 || subcategory2 === postItem.subcategory2) &&
      slug === postItem.slug
    );
  });

  return getPost(filteredPaths[0].replace(/\.mdx?$/, ''));
};

export { getPost, getAllPosts, getPostsFilteredByCategory, getPostFilteredByCategory };
