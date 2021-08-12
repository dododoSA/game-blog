import renderer from 'react-test-renderer';
import { BreadcrumbNavigation } from 'Components/Common/BreadcrumbNavigation/BreadcrumbNavigation';
import { getBreadcrumbPaths, getPost } from 'utils/mdxUtils';
import { IPost } from 'types/post';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      // '/' 意外ならなんでも
      pathname: '/theory/pglanguage/c/setup',
    };
  },
}));

test('BreadcrumbNavigation', () => {
  // TODO: いろんなパスで正しいかどうかをチェックしたほうがいいかを考える
  const MDX_PATH = 'theory/pglanguage/c';
  const { data } = getPost('setup', MDX_PATH);
  const breadcrumbPaths = getBreadcrumbPaths(MDX_PATH, data as IPost);
  const component = renderer.create(<BreadcrumbNavigation paths={breadcrumbPaths} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
