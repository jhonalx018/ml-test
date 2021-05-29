import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import BodyContent from './index';

describe('App', () => {
  it('renders without crashing BodyContentComponent', () => {
    const component = renderer.create(
      <BodyContent />,
    );

    const tree = component.toJSON();

    expect(tree).toBeTruthy();
  });
});
