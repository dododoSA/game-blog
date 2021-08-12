import renderer from 'react-test-renderer';
import { Footer } from 'Components/Common/Footer/Footer';

test('Footer', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
