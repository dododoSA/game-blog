import renderer from 'react-test-renderer';
import { CommonLayout } from 'Components/Layouts/CommonLayout';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      // TODO: 他のパターン
      pathname: '/',
    };
  },
}));

test('CommonLayout', () => {
  const component = renderer.create(<CommonLayout>hello</CommonLayout>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
