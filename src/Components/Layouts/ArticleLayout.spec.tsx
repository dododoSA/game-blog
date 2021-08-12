import renderer from 'react-test-renderer';
import { getBreadcrumbPaths, getPost } from 'utils/mdxUtils';
import { IPost } from 'types/post';
import { ArticleLayout } from 'Components/Layouts/ArticleLayout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      // '/' 意外ならなんでも
      pathname: '/theory/pglanguage/c/setup',
    };
  },
}));

test('ArticleLayout', () => {
  // TODO: いろんなパスで正しいかどうかをチェックしたほうがいいかを考える
  const MDX_PATH = 'theory/pglanguage/c';
  const { data } = getPost('setup', MDX_PATH);
  const breadcrumbPaths = getBreadcrumbPaths(MDX_PATH, data as IPost);
  const component = renderer.create(<ArticleLayout breadcrumbPaths={breadcrumbPaths}>hello</ArticleLayout>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
