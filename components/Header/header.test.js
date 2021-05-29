import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import Header from './index';

describe('App', () => {
  it('renders without crashing HeaderComponent', () => {
    const component = renderer.create(
      <Header title="test" metaDescription="test" />,
    );

    const tree = component.toJSON();

    expect(tree).toBeFalsy();
  });
});
