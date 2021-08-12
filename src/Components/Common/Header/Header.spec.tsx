import renderer from 'react-test-renderer';
import { Header } from 'Components/Common/Header/Header';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/theory',
    };
  },
}));

test('Header', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
